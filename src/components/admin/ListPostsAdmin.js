import React, { Component } from "react";

export default class ListPostsAdmin extends Component {
  render() {
    return (
      <div className="row">
        <button type="button" className="btn btn-outline-dark">
          Thêm bài viết
        </button>
        <div className="col-md-12 grid-margin">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Số thứ tự</th>
                <th>Chủ đề bài viết</th>
                <th>Ngày viết</th>
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
    );
  }
}
