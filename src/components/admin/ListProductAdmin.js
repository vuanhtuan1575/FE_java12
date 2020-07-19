import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { Editor } from "@tinymce/tinymce-react";
import { UPLOAD_SIGNLE_URL } from "../../apis";
import { toast } from "react-toastify";
import Select from "react-select";
import Resizer from "react-image-file-resizer";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  createProduct,
  resetActionFunc,
  findAllProductProcess,
  deleteProductById,
  findSignleProductByNameSeo,
  updateProduct,
} from "../../actions";
import { dataURLtoFile, numberToVnd, xoa_dau, removeSpace } from "../../common";

class ListProductAdmin extends Component {
  state = {
    edit: false,
    modelShow: false,
    isImgExist: false,
    files: undefined,
    productDto: {
      id: -1,
      name: "",
      nameSeo: "",
      oldPrice: undefined,
      nowPrice: undefined,
      description: "",
      jsonImg: undefined,
      categoryNameSeo: undefined,
      productStatus: null,
    },
    selectOptionState: null,
    selectOptionCategory: null,
    optionProductStatus: [
      { value: 0, label: "Thời trang hot" },
      { value: 1, label: "Sản phẩm bán chạy" },
      { value: 2, label: "Sản phẩm mới nhất" },
      { value: 3, label: "Sản phẩm" },
    ],
  };
  componentDidMount() {
    this.props.findAllProductProcess();
  }

  /**
   * Handle TinyBCE Editor to state
   * @param {*} content
   * @param {*} editor
   */
  handleEditorChange = (content, editor) => {
    this.setState({
      ...this.state,
      productDto: { ...this.state.productDto, description: content },
    });
  };

  /**
   * Handle Choose file
   * @param {*} e
   */
  onFileChange = (e) => {
    this.setState({ ...this.state, files: e.target.files, isImgExist: true });
  };

  /**
   * Auto replace space and utf-8 to eng
   */
  handleAutoWriteNameSeo = () => {
    this.setState({
      ...this.state,
      productDto: {
        ...this.state.productDto,
        nameSeo: removeSpace(xoa_dau(this.state.productDto.name)),
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
      productDto: { ...this.state.productDto, [evt.target.name]: value },
    });
  };

  notifySucess = () => {
    let str;
    if (this.state.edit) str = "Cập nhật thành công";
    else str = "Thêm nhật thành công";
    return toast.success(`${str} `, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000,
    });
  };
  notifyError = () => {
    return toast.danger("Kiểm tra thông tin nhập", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.selectOptionCategory && this.state.selectOptionState) {
      if (this.state.files) {
        this.handleUploadImage();

        setTimeout(() => {
          this.props.createProduct(this.state.productDto);
        }, 1000);
      } else if (this.state.edit) {
        this.props.updateProduct(this.state.productDto);
      }
    } else alert("Vui lòng chọn Danh mục sản phẩm và Loại sản phẩm");
  };
  handleDeleteProduct = (id, index) => {
    this.props.deleteProductById(id, index);
  };

  /**
   * Handle Upload image and resize
   */
  handleUploadImage = () => {
    const axios = require("axios");
    if (this.state.isImgExist === false) return alert("vui lòng chọn hình ảnh");
    let tempImages = [];

    for (const key of Object.keys(this.state.files)) {
      let formData = new FormData();
      Resizer.imageFileResizer(
        this.state.files[key],
        800,
        1067,
        "JPEG",
        100,
        0,
        (uri) => {
          let file = dataURLtoFile(uri, this.state.files[key].name);

          formData.append(
            "file",
            file,
            Math.random().toString(36).substr(2, 9) + this.state.files[key].name
          );
          axios.post(UPLOAD_SIGNLE_URL, formData, {}).then((res) => {
            console.log(res.data);
            tempImages.push(`${res.data.fileDownloadUri}`);
          });
        },
        "base64"
      );
    }

    this.setState({
      ...this.state,
      productDto: { ...this.state.productDto, jsonImg: tempImages },
      isImgExist: true,
    });
  };

  handleChangeSelectState = (selectedOption) => {
    this.setState({
      ...this.state,
      productDto: {
        ...this.state.productDto,
        productStatus: selectedOption.value,
      },
      selectOptionState: selectedOption,
    });
  };
  handleChangeSelectCategory = (selectedOption) => {
    this.setState({
      ...this.state,
      productDto: {
        ...this.state.productDto,
        categoryNameSeo: selectedOption.value,
      },
      selectOptionCategory: selectedOption,
    });
  };
  handleEditProduct = (nameSeo) => {
    this.props.findSignleProductByNameSeo(nameSeo);
    setTimeout(() => {
      if (this.props.product) {
        const temtProduct = {
          id: this.props.product.id,
          name: this.props.product.name,
          nameSeo: this.props.product.nameSeo,
          oldPrice: this.props.product.oldPrice,
          nowPrice: this.props.product.nowPrice,
          description: this.props.product.description,
          jsonImg: this.props.product.jsonImg,
          categoryNameSeo: this.props.product.categoryNameSeo,
          productStatus: this.props.product.productStatus,
        };
        this.props.resetActionFunc();
        this.setState({
          ...this.state,
          edit: true,
          productDto: temtProduct,
          modelShow: !this.state.modelShow,
        });
        this.handleChangeSelectState(
          this.state.optionProductStatus.find(
            (item) => item.value === temtProduct.productStatus
          )
        );

        this.handleChangeSelectCategory(
          this.convertPropsToOptions(this.props.categorys).find(
            (item) => item.value === temtProduct.categoryNameSeo
          )
        );
      }
    }, 100);
  };

  /**
   * Model Add product
   * @param {*} props
   */
  modelAddProduct = (props) => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Thêm sản phẩm
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="card">
            <div className="card-body" style={{ padding: "0px 24px" }}>
              <form className="forms-sample" onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <input
                    type="file"
                    name="files"
                    onChange={this.onFileChange}
                    multiple
                    className="form-control-file"
                    required
                  />
                </div>
              </form>
              <form className="forms-sample" onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label>Tên sản phẩm</label>
                  <input
                    required
                    type="text"
                    name="name"
                    value={this.state.productDto.name}
                    onChange={this.handleChange}
                    className="form-control"
                    placeholder="VD: Quần ống loe"
                    onMouseOut={this.handleAutoWriteNameSeo}
                  />
                </div>
                <div className="form-group">
                  <label>Tên SEO</label>
                  <input
                    required
                    name="nameSeo"
                    value={this.state.productDto.nameSeo}
                    onChange={this.handleChange}
                    type="text"
                    className="form-control"
                    placeholder="VD: Quan-ong-loe"
                  />
                </div>
                <div className="form-group">
                  <label>
                    Giá chưa giảm |{" "}
                    {numberToVnd(this.state.productDto.oldPrice)}
                  </label>
                  <input
                    required
                    value={this.state.productDto.oldPrice}
                    name="oldPrice"
                    onChange={this.handleChange}
                    type="number"
                    className="form-control"
                    placeholder="VD: 50000"
                  />
                </div>
                <div className="form-group">
                  <label>
                    Giá bán hiện tại |{" "}
                    {numberToVnd(this.state.productDto.nowPrice)}
                  </label>
                  <input
                    required
                    value={this.state.productDto.nowPrice}
                    name="nowPrice"
                    onChange={this.handleChange}
                    type="number"
                    className="form-control"
                    placeholder="VD: 40000"
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword4">Danh mục sản phẩm</label>
                  <Select
                    styles={{
                      // Fixes the overlapping problem of the component
                      menu: (provided) => ({ ...provided, zIndex: 9999 }),
                    }}
                    isSearchable
                    value={this.state.selectOptionCategory}
                    onChange={this.handleChangeSelectCategory}
                    options={this.convertPropsToOptions(this.props.categorys)}
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword4">
                    Chọn Danh mục sản phẩm
                  </label>
                  <Select
                    styles={{
                      // Fixes the overlapping problem of the component
                      menu: (provided) => ({ ...provided, zIndex: 9999 }),
                    }}
                    isSearchable
                    value={this.state.selectOptionState}
                    onChange={this.handleChangeSelectState}
                    options={this.state.optionProductStatus}
                  />
                </div>

                <div className="form-group">
                  <label for="exampleInputPassword4">Mô tả sản phẩm</label>
                  <Editor
                    apiKey="lpuxq0wvsxku3pc90arsw3yp7yr7idacs679co1qp2oo45yy"
                    plugins="wordcount link image charmap print preview anchor searchreplace visualblocks code fullscreen insertdatetime media table paste code help"
                    onEditorChange={this.handleEditorChange}
                    value={this.state.productDto.description}
                  />
                </div>
                <button type="submit" className="btn btn-primary mr-2">
                  {this.state.edit === true ? "Cập nhật" : "Thêm sản phẩm"}
                </button>
              </form>
              <div className="form-group mt-4">
                {this.state.modelShow &&
                  this.props.statusAction === 200 &&
                  this.notifySucess()}
                {this.state.modelShow &&
                  this.props.statusAction === 500 &&
                  this.notifyError()}
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  };

  handleShowModel = () => {
    this.props.resetActionFunc();
    if (this.state.modelShow === true) this.props.findAllProductProcess();
    this.setState({
      ...this.state,
      modelShow: !this.state.modelShow,
      edit: false,
    });
  };

  convertPropsToOptions = (array) => {
    let options = [];
    let temp;

    array.map((item, index) => {
      if (item.onMenu === false) {
        temp = { value: item.nameSeo, label: item.name };
        options.push(temp);
      }
      return console.log();
    });
    return options;
  };

  render() {
    console.log(this.state);

    return (
      <>
        <this.modelAddProduct
          show={this.state.modelShow}
          onHide={() => this.handleShowModel()}
        />
        <div className="row">
          <button
            type="button"
            className="btn btn-outline-dark"
            onClick={() => this.handleShowModel()}
          >
            Thêm sản phẩm
          </button>
          <div className="col-md-12 grid-margin">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Sản Phẩm</th>
                  <th>Giá sale</th>
                  <th>Giá chưa sale</th>
                  <th>Trạng thái</th>
                  <th>Hành động</th>
                </tr>
              </thead>
              <tbody>
                {this.props.products &&
                  this.props.products.map((item, index) => (
                    <tr>
                      <td>{item.name}</td>
                      <td>{item.nowPrice}</td>
                      <td>{item.oldPrice}</td>
                      <td className="text-danger">
                        <label className="badge badge-danger mr-1">
                          {item.isActive === true ? (
                            <span>Kích Hoạt</span>
                          ) : (
                            <span>Không kích hoạt</span>
                          )}
                        </label>
                      </td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-danger my-auto mr-1"
                          onClick={() =>
                            this.handleDeleteProduct(item.id, index)
                          }
                        >
                          Delete
                        </button>
                        <button
                          type="button"
                          className="btn btn-danger my-auto"
                          onClick={() => this.handleEditProduct(item.nameSeo)}
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}
ListProductAdmin.defaultProps = {
  categorys: [],
  statusAction: -1,
  products: [],
  product: undefined,
};

const mapStateToProps = (state) => ({
  statusAction: state.statusAction,
  products: state.products,
  product: state.product,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    {
      createProduct,
      resetActionFunc,
      findAllProductProcess,
      deleteProductById,
      findSignleProductByNameSeo,
      updateProduct,
    },
    dispatch
  ),
});
export default connect(mapStateToProps, mapDispatchToProps)(ListProductAdmin);
