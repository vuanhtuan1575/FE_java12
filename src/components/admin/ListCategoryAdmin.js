import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { xoa_dau, removeSpace } from "../../common";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  createCategory,
  resetActionFunc,
  findAllCategoryFunc,
  disableCategoryByIdFunc,
} from "../../actions";
class ListCategoryAdmin extends Component {
  state = {
    modelShow: false,
    categoryDto: {
      name: null,
      nameSeo: null,
    },
  };
  componentDidMount() {
    this.props.findAllCategoryFunc();
  }

  /**
   * Auto replace space and utf-8 to eng
   */
  handleAutoWriteNameSeo = () => {
    this.setState({
      ...this.state,
      categoryDto: {
        ...this.state.categoryDto,
        nameSeo: removeSpace(xoa_dau(this.state.categoryDto.name)),
      },
    });
  };
  disableCategory = (id) => {
    this.props.disableCategoryByIdFunc(id);
    this.props.findAllCategoryFunc();
  };

  /**
   * Match input to state
   * @param {*} evt
   */
  handleChange = (evt) => {
    let value;
    if (evt.target.name === "nameSeo")
      value = removeSpace(xoa_dau(evt.target.value));
    else value = evt.target.value;

    this.setState({
      ...this.state,
      categoryDto: { ...this.state.categoryDto, [evt.target.name]: value },
    });
  };

  handleShowModel = () => {
    this.props.resetActionFunc();
    this.setState({ ...this.state, modelShow: !this.state.modelShow });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createCategory(this.state.categoryDto);
  };

  /**
   * Model Add category
   * @param {*} props
   */
  modelAddCategory = (props) => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Thêm Category
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="card">
            <div className="card-body" style={{ padding: "0px 24px" }}>
              <form className="forms-sample" onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label for="exampleInputName1">Loại sản phẩm</label>
                  <input
                    type="text"
                    name="name"
                    value={this.state.categoryDto.name}
                    onChange={this.handleChange}
                    className="form-control"
                    placeholder="VD: Quần dài"
                    onMouseOut={this.handleAutoWriteNameSeo}
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputEmail3">Tên SEO</label>
                  <input
                    name="nameSeo"
                    value={this.state.categoryDto.nameSeo}
                    onChange={this.handleChange}
                    type="text"
                    className="form-control"
                    placeholder="VD: Quan-ong-loe"
                  />
                </div>
                <button type="submit" className="btn btn-primary mr-2">
                  Submit
                </button>
                <button className="btn btn-light">Cancel</button>
                <div className="form-group mt-4">
                  {this.props.statusAction === 200 && (
                    <div class="p-3 mb-2 bg-success text-white">
                      Thêm Category thành công
                    </div>
                  )}
                  {this.props.statusAction === 500 && (
                    <div class="p-3 mb-2 bg-warning text-dark">
                      Kiểm tra lại thông tin nhập
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  };
  render() {
    console.log(this.state);
    return (
      <>
        <this.modelAddCategory
          show={this.state.modelShow}
          onHide={() => this.handleShowModel()}
        />
        <div className="row">
          <button
            type="button"
            className="btn btn-outline-dark"
            onClick={() => this.handleShowModel()}
          >
            Thêm loại sản phẩm
          </button>
          <div className="col-md-12 grid-margin">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Loại sản phẩm</th>
                  <th>Trạng thái</th>
                  <th>Hành động</th>
                </tr>
              </thead>
              <tbody>
                {this.props.categorys &&
                  this.props.categorys.map((item, index) => (
                    <>
                      <tr>
                        <td>{item.name}</td>
                        <td className="text-danger">
                          {item.isActive ? "Hoạt động" : "Không hoạt động"}
                        </td>
                        <td>
                          <label className="badge badge-danger mr-1">
                            {item.isActive ? (
                              <span
                                onClick={() => this.disableCategory(item.id)}
                              >
                                bỏ kích hoạt
                              </span>
                            ) : (
                              "Kích hoạt"
                            )}
                          </label>
                          <label className="badge badge-danger">
                            <i className="far fa-edit"></i>
                          </label>
                        </td>
                      </tr>
                    </>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}
ListCategoryAdmin.defaultProps = {
  statusAction: undefined,
  categorys: [],
};
//tao component ProductCard, dua component vao list

const mapStateToProps = (state) => ({
  statusAction: state.statusAction,
  categorys: state.categorys,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    {
      createCategory,
      resetActionFunc,
      findAllCategoryFunc,
      disableCategoryByIdFunc,
    },
    dispatch
  ),
});
export default connect(mapStateToProps, mapDispatchToProps)(ListCategoryAdmin);
