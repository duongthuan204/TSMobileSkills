function About() {
    return (
        <div className="about box content mx-4 mb-4">
            <h5>Giới thiệu</h5>
            <p>Đây là công cụ giúp tính số điểm cần có để học các kĩ năng trong game TS Mobile (Dzo Game)</p>
            <h5>Hướng dẫn</h5>
            <ul>
                <li>Thông tin chỉ có tác dụng tham khảo, không ảnh hưởng đến dữ liệu thực tế trong game.</li>
                <li>Sau khi bắt đầu tăng kĩ năng, sẽ khóa không cho chọn Hệ và Nghề. Bấm Reset để hủy bỏ và làm lại.</li>
                <li>Muốn học kĩ năng nào thì cần học kĩ năng điều kiện của nó trước.</li>
                <li>Mỗi kĩ năng nghề sẽ được học 2 kĩ năng tái sinh (xem như bạn đã có đủ Ball).</li>
                <li>Muốn hủy kĩ năng đã học thì tăng max điểm rồi nhấn thêm lần nữa. Nếu đang có kĩ năng khác phụ thuộc thì chỉ có thể giảm điểm về 1.</li>
                <li>Hỗ trợ học nhanh các kĩ năng cuối nhánh chưa chuyển sinh. Ví dụ: Bạch Hồng Quán Nhật, Kính, Hồi Sinh, Loạn Kích...</li>
                <li>Chức năng Lưu chỉ có tác dụng lưu local, đổi trình duyệt khác sẽ mất dữ liệu.</li>
                <li>Công cụ được phát triển bởi 1 cá nhân, làm cho vui, có thể có lỗi. Nếu phát hiện lỗi hoặc góp ý gì vui lòng liên hệ với mình.</li>
            </ul>
            <h5>Liên hệ</h5>
            <ul>
                <li>Tác giả: <span className="bold">Dương Minh Thuận</span></li>
                <li>Tên nhân vật: <span className="bold">Prosperous</span> (server Mã Siêu)</li>
                <li>Facebook: <a href="https://www.facebook.com/shunbrvt/" target="_blank" rel="noreferrer">Dương Thuận</a></li>
                <li>Email: <a href="mailto:duongthuan204@gmail.com" target="_blank" rel="noreferrer">duongthuan204@gmail.com</a></li>
            </ul>
            <h5>Ngoài lề</h5>
            <ul>
                <li>Hồi trước mình có làm vài truyện chế TS. Trong đó có 1 truyện đạt giải nhất cuộc thi do Asiasoft tổ chức. Mời xem <a href="https://tinyurl.com/truyentsonline">tại đây</a>.</li>
            </ul>
        </div>
    );
}
export default About;