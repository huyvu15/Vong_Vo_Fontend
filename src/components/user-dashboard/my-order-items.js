import React, { useEffect, useState } from "react";
import Link from "next/link";
import dayjs from "dayjs";
import Pagination from "@ui/Pagination";
import {
  useCancelOrderMutation,
  useReturnOrderMutation
} from "src/redux/features/order/orderApi";
import { notifyError, notifySuccess } from "@utils/toast";
import Swal from "sweetalert2";

const MyOrderItems = ({ items, itemsPerPage }) => {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [cancelOrder, { }] = useCancelOrderMutation();
  const [returnOrder, { }] = useReturnOrderMutation();
  // side effect
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, items]);

  // handleCancel
  const handleCancel = (id) => async () => {
    Swal.fire({
      title: "Bạn có chắc chắn muốn hủy đơn hàng này?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Vâng, hủy nó!",
      cancelButtonText: "Không"
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          cancelOrder(id)
            .then((res) => {
              notifySuccess(`Đã hủy đơn hàng thành công`);
              setCurrentItems(currentItems.map((item) => {
                if (item._id === id) {
                  return {
                    ...item,
                    status: "cancelled",
                  };
                }
                return item;
              }));
            })
        } catch (error) {
          console.log(error);
          notifyError("Có lỗi xảy ra");
        }
      }
    })
  };

  // handleReturn
  const handleReturn = (id) => async () => {
    Swal.fire({
      title: "Bạn có chắc chắn muốn trả hàng?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Vâng, trả hàng!",
      cancelButtonText: "Không"
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          returnOrder(id)
            .then((res) => {
              notifySuccess(`Đã trả hàng thành công`);
              setCurrentItems(currentItems.map((item) => {
                if (item._id === id) {
                  return {
                    ...item,
                    status: "return",
                  };
                }
                return item;
              }));
            })
        } catch (error) {
          console.log(error);
          notifyError("Có lỗi xảy ra");
        }
      }
    })
  };

  // handlePageClick
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };
  return (
    <React.Fragment>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Thời gian đặt</th>
            <th scope="col">Trạng thái</th>
            <th scope="col">Xem</th>
            <th scope="col">Hủy</th>
          </tr>
        </thead>
        <tbody>
          {currentItems &&
            currentItems.map((item, i) => (
              <tr key={i}>
                <th className="text-uppercase" scope="row">
                  {" "}
                  #{item?._id}
                </th>
                <td data-info="title">
                  {dayjs(item?.createdAt).format("DD/MM/YYYY")}
                </td>
                <td
                  data-info={`status ${item?.status === "pending" ? "pending" : ""
                    }  
                ${item?.status === "processing" ? "hold" : ""} 
                ${item?.status === "delivered" ? "done" : ""}`}
                  className={`status ${item?.status === "pending" ? "pending" : item?.status === "failed" ? "failed" : item?.status === "success" ? "success" : item?.status === "cancelled" ? "cancelled" : item?.status === "return" ? "return" : item?.status === "returned" ? "done" : item?.status === "reject" ? "failed" : ""
                    }  
                ${item?.status === "processing" ? "hold" : ""} 
                ${item?.status === "delivered" ? "done" : ""}`}
                >
                  {item?.status === "pending" ? "Chờ xác nhận" : item?.status === "processing" ? "Đang giao" : item?.status === "delivered" ? "Đã giao" : item?.status === "failed" ? "Thanh toán thất bại" : item?.status === "success" ? "Đã thanh toán" : item?.status === "return" ? "Yều cầu trả hàng" : item?.status === "returned" ? "Đã trả hàng" : item?.status === "reject" ? "Từ chối trả hàng" : "Đã hủy"}
                </td>
                <td>
                  <Link href={`/order/${item._id}`} className="tp-btn">
                    Hóa đơn
                  </Link>
                </td>
                <td>
                  {item?.status === "pending" && <button onClick={handleCancel(item._id)} className="tp-btn">
                    Hủy
                  </button>}
                  {item?.status === "delivered" && new Date(item.createdAt).getTime() > (new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000)).getTime() && <button onClick={handleReturn(item._id)} className="tp-btn">
                    Trả hàng
                  </button>}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {/* pagination start */}
      {items.length > itemsPerPage && (
        <div className="mt-20 ml-20 tp-pagination tp-pagination-style-2">
          <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
        </div>
      )}
      {/* pagination end */}
    </React.Fragment>
  );
};

export default MyOrderItems;
