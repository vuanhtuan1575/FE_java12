import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { Editor } from "@tinymce/tinymce-react";
import { UPLOAD_SIGNLE_URL } from "../../apis";
import Resizer from "react-image-file-resizer";
import { dataURLtoFile, numberToVnd, xoa_dau, removeSpace } from "../../common";
export default class ListProductAdmin extends Component {
  state = {
    modelShow: false,
    isImgExist: false,
    files: undefined,
    productDto: {
      name: "",
      nameSeo: "",
      oldPrice: undefined,
      nowPrice: undefined,
      description: "",
      jsonImg: undefined,
      categoryId: undefined,
    },
  };

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
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="card">
            <div className="card-body" style={{ padding: "0px 24px" }}>
              <form className="forms-sample">
                <div className="form-group">
                  <label for="exampleFormControlFile1"></label>
                  <input
                    type="file"
                    name="files"
                    onChange={this.onFileChange}
                    multiple
                    className="form-control-file"
                    id="exampleFormControlFile1"
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputName1">Tên sản phẩm</label>
                  <input
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
                  <label for="exampleInputEmail3">Tên SEO</label>
                  <input
                    name="nameSeo"
                    value={this.state.productDto.nameSeo}
                    onChange={this.handleChange}
                    type="text"
                    className="form-control"
                    placeholder="VD: Quan-ong-loe"
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword4">
                    Giá chưa giảm |{" "}
                    {numberToVnd(this.state.productDto.oldPrice)}
                  </label>
                  <input
                    value={this.state.productDto.oldPrice}
                    name="oldPrice"
                    onChange={this.handleChange}
                    type="number"
                    className="form-control"
                    placeholder="VD: 50000"
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword4">
                    Giá bán hiện tại |{" "}
                    {numberToVnd(this.state.productDto.nowPrice)}
                  </label>
                  <input
                    value={this.state.productDto.nowPrice}
                    name="nowPrice"
                    onChange={this.handleChange}
                    type="number"
                    className="form-control"
                    placeholder="VD: 40000"
                  />
                </div>

                <div className="form-group form-control-sm">
                  <label for="exampleSelectGender"></label>
                  <select className="form-control" id="exampleSelectGender">
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>

                <div className="form-group my-5">
                  <Editor
                    apiKey="lpuxq0wvsxku3pc90arsw3yp7yr7idacs679co1qp2oo45yy"
                    plugins="wordcount link image charmap print preview anchor searchreplace visualblocks code fullscreen insertdatetime media table paste code help wordcount"
                    onEditorChange={this.handleEditorChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary mr-2">
                  Submit
                </button>
                <button className="btn btn-light">Cancel</button>
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

  handleShowModel = () => {
    this.setState({ ...this.state, modelShow: !this.state.modelShow });
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
                <tr>
                  <td>Jacob</td>
                  <td>Photoshop</td>
                  <td>Photoshop</td>
                  <td className="text-danger">
                    28.76% <i className="mdi mdi-arrow-down"></i>
                  </td>
                  <td>
                    <label className="badge badge-danger">Pending</label>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}
