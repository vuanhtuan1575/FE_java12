import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import Select from "react-select";
import { xoa_dau, removeSpace } from "../../common";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  createCategory,
  resetActionFunc,
  findAllCategoryFunc,
  switchCategoryByIdFunc,
  deleteCategoryById,
  findCategoryById,
  updateCategory,
} from "../../actions";
class ListCategoryAdmin extends Component {
  state = {
    edit: false,
    modelShow: false,
    categoryDto: {
      id: -1,
      name: "",
      nameSeo: "",
      parentNameSeo: "",
      isActive: undefined,
      description: "",
    },
    isCategoryParent: false,
    selectOptionCategory: null,
  };

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
  switchCategory = (id, index) => {
    this.props.switchCategoryByIdFunc(id, index);
  };

  handleChangeCategoryParent = () => {
    this.setState({
      ...this.state,
      isCategoryParent: !this.state.isCategoryParent,
      categoryDto: {
        id: -1,
        name: "",
        nameSeo: "",
        parentNameSeo: "",
        isActive: undefined,
        description: "",
      },
    });
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
    if (this.state.modelShow === true) this.props.findAllCategoryFunc();
    this.setState({
      ...this.state,
      modelShow: !this.state.modelShow,
      edit: false,
      id: -1,
      name: "",
      nameSeo: "",
      parentNameSeo: "",
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.edit) this.props.updateCategory(this.state.categoryDto);
    else this.props.createCategory(this.state.categoryDto);
  };

  handleDeleteCategory = (id, index) => {
    this.props.deleteCategoryById(id, index);
  };

  handleChangeSelectState = (selectedOption) => {
    this.setState({
      ...this.state,
      categoryDto: {
        ...this.state.categoryDto,
        parentNameSeo: selectedOption.value,
      },
      selectOptionCategory: selectedOption,
    });
  };
  convertPropsToOptions = () => {
    let options = [];
    let temp;

    this.props.categorys.map((item, index) => {
      temp = { value: item.nameSeo, label: item.name };
      options.push(temp);

      return console.log();
    });
    return options;
  };

  handleEditCategory = (id) => {
    this.props.findCategoryById(id);
    setTimeout(() => {
      if (this.props.category) {
        const tempCategory = {
          id: this.props.category.id,
          name: this.props.category.name,
          nameSeo: this.props.category.nameSeo,
          parentNameSeo: this.props.category.parentNameSeo,
          isActive: this.props.category.isActive,
        };
        this.props.resetActionFunc();
        if (tempCategory.parentNameSeo)
          this.setState({
            ...this.state,
            edit: true,
            categoryDto: tempCategory,
            modelShow: !this.state.modelShow,
            isCategoryParent: true,
          });
        else
          this.setState({
            ...this.state,
            edit: true,
            categoryDto: tempCategory,
            modelShow: !this.state.modelShow,
            isCategoryParent: false,
          });
        let options = this.convertPropsToOptions().find(
          (item) => item.value === tempCategory.parentNameSeo
        );
        if (options) this.handleChangeSelectState(options);
      }
    }, 100);
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
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={this.handleChangeCategoryParent}
            >
              {this.state.isCategoryParent === true
                ? "Chuy???n sang th??m category cha"
                : "Chuy???n sang th??m category con"}
            </button>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="card">
            <div className="card-body" style={{ padding: "0px 24px" }}>
              <form className="forms-sample" onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label>Lo???i s???n ph???m</label>
                  <input
                    type="text"
                    name="name"
                    value={this.state.categoryDto.name}
                    onChange={this.handleChange}
                    className="form-control"
                    placeholder="VD: Qu???n d??i"
                    onMouseOut={this.handleAutoWriteNameSeo}
                  />
                </div>
                <div className="form-group">
                  <label>T??n SEO</label>
                  <input
                    name="nameSeo"
                    value={this.state.categoryDto.nameSeo}
                    onChange={this.handleChange}
                    type="text"
                    className="form-control"
                    placeholder="VD: Quan-ong-loe"
                  />
                </div>
                {this.state.isCategoryParent && (
                  <div className="form-group">
                    <label>M?? t??? Category</label>
                    <input
                      name="description"
                      value={this.state.categoryDto.description}
                      onChange={this.handleChange}
                      type="text"
                      className="form-control"
                      placeholder="VD: Quan-ong-loe"
                    />
                  </div>
                )}
                {this.state.isCategoryParent && (
                  <div className="form-group">
                    <label for="">Category Cha</label>
                    <Select
                      styles={{
                        // Fixes the overlapping problem of the component
                        menu: (provided) => ({ ...provided, zIndex: 9999 }),
                      }}
                      isSearchable
                      value={this.state.selectOptionCategory}
                      onChange={this.handleChangeSelectState}
                      options={this.convertPropsToOptions()}
                    />
                  </div>

                  // <div className="form-group">
                  //   <label className="mr-5">Category Cha</label>

                  //   <select
                  //     style={{ backgroundColor: "white", color: "black" }}
                  //     className="form-control form-control-sm"
                  //     name="parentNameSeo"
                  //     value={this.state.categoryDto.parentNameSeo}
                  //     onChange={this.handleChange}
                  //   >
                  //     <option defaultValue="Ch???n category">Click ch???n</option>
                  //     {this.props.categorys.map((item, index) => (
                  //       <option key={index} value={item.nameSeo}>
                  //         {item.name}
                  //       </option>
                  //     ))}
                  //   </select>
                  // </div>
                )}
                {this.state.edit === false ? (
                  <button type="submit" className="btn btn-primary mr-2">
                    Th??m
                  </button>
                ) : (
                  <button type="submit" className="btn btn-primary mr-2">
                    S???a
                  </button>
                )}

                <div className="form-group mt-4">
                  {this.props.statusAction === 200 && (
                    <div className="p-3 mb-2 bg-success text-white">
                      {this.state.edit
                        ? "S???a Category th??nh c??ng"
                        : "Th??m Category th??nh c??ng"}
                    </div>
                  )}
                  {this.props.statusAction === 500 && (
                    <div className="p-3 mb-2 bg-warning text-dark">
                      Ki???m tra l???i th??ng tin nh???p
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
    const categorys = Array.from(this.props.categorys);
    console.log(this.state);
    return (
      <div>
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
            Th??m lo???i s???n ph???m
          </button>
          <div className="col-md-12 grid-margin">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Lo???i s???n ph???m</th>
                  <th>Tr???ng th??i</th>
                  <th>H??nh ?????ng</th>
                </tr>
              </thead>
              <tbody>
                {categorys &&
                  categorys.map((item, index) => (
                    <tr key={index}>
                      <td>
                        {`${item.name} `}
                        {item.subCategorys && item.subCategorys.length > 0 && (
                          <span className="text-danger">(Parent)</span>
                        )}
                      </td>

                      <td className="text-danger">
                        {item.isActive ? "Ho???t ?????ng" : "Kh??ng ho???t ?????ng"}
                      </td>
                      <td>
                        <label className="badge badge-danger mr-1">
                          {item.isActive ? (
                            <span
                              onClick={() =>
                                this.switchCategory(item.id, index)
                              }
                            >
                              b??? k??ch ho???t
                            </span>
                          ) : (
                            <span
                              onClick={() =>
                                this.switchCategory(item.id, index)
                              }
                            >
                              k??ch ho???t
                            </span>
                          )}
                        </label>
                        <label className="badge badge-danger">
                          <i
                            className="far fa-edit"
                            onClick={() => this.handleEditCategory(item.id)}
                          ></i>
                        </label>
                        <label className="badge badge-danger">
                          <i
                            className="fas fa-trash"
                            onClick={() =>
                              this.handleDeleteCategory(item.id, index)
                            }
                          ></i>
                        </label>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
ListCategoryAdmin.defaultProps = {
  statusAction: -1,
  category: undefined,
};
//tao component ProductCard, dua component vao list

const mapStateToProps = (state) => ({
  statusAction: state.statusAction,
  category: state.category,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    {
      createCategory,
      resetActionFunc,
      findAllCategoryFunc,
      switchCategoryByIdFunc,
      deleteCategoryById,
      findCategoryById,
      updateCategory,
    },
    dispatch
  ),
});
export default connect(mapStateToProps, mapDispatchToProps)(ListCategoryAdmin);
