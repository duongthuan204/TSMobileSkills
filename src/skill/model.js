var Skill = {
    getSkills: function () {
        function checkMax(max) {
            if (max > 0) return max
            return 10
        }
        function add(id, name, pointRequire, skillRequire, pointMax) {
            let skill = {
                [id]:
                {
                    id: id,
                    name: name,
                    point: 0,
                    pointRequire: pointRequire,
                    skillRequire: skillRequire,
                    pointMax: checkMax(pointMax)
                }
            }
            skills = { ...skills, ...skill }
        }
        var skills = {}
        //Hoa
        add('phonghoa', 'Phóng Hỏa', 1, 'khong')
        add('hoatien', 'Hỏa Tiễn', 4, 'phonghoa')
        add('hoitam', 'Hội Tâm Nhất Kích', 7, 'hoatien')
        add('hoakiem', 'Hỏa Kiếm', 9, 'hoitam')
        add('cuongdiem', 'Cuồng Điện Trảm', 12, 'hoakiem')
        add('bachhong', 'Bạch Hồng Quán Nhật', 16, 'cuongdiem')
        add('liethoa', 'Liệt Hỏa', 3, 'phonghoa')
        add('hoaluan', 'Hỏa Luân', 6, 'liethoa')
        add('phonghoaluan', 'Phong Hỏa Luân', 10, 'hoaluan')
        add('batdien', 'Bát Diện Hỏa Luân', 13, 'phonghoaluan')
        add('lieunguyen', 'Liêu Nguyên Hỏa', 16, 'batdien')
        add('hoacau', 'Hỏa Cầu', 7, 'liethoa')
        add('vudieu', 'Vũ Điệu Nóng Bỏng', 10, 'hoacau')
        add('hoalong', 'Hỏa Long', 12, 'vudieu')
        add('tamvi', 'Tam Vị Chân Hỏa', 16, 'hoalong')
        //Thuy
        add('nuocngap', 'Nước Ngập', 1, 'khong')
        add('bangkiem', 'Băng Kiếm', 3, 'nuocngap')
        add('dungtuyen', 'Dũng Tuyền', 5, 'bangkiem')
        add('hongthuy', 'Hồng Thủy', 8, 'dungtuyen')
        add('bangda', 'Băng Đá', 9, 'hongthuy')
        add('bangphong', 'Băng Phong', 16, 'bangda')
        add('tanbang', 'Tan Băng', 1, 'bangda', 1)
        add('bangtuong', 'Băng Tường', 4, 'nuocngap', 5)
        add('thanhluu', 'Thanh Lưu', 6, 'bangtuong')
        add('trilieu', 'Trị Liệu', 8, 'thanhluu')
        add('toantrilieu', 'Toàn Trị Liệu', 9, 'trilieu')
        add('hoisinh', 'Hồi Sinh', 12, 'toantrilieu')
        add('hoima', 'Hồi Ma', 8, 'thanhluu')
        add('toanhoima', 'Toàn Hồi Ma', 9, 'hoima')
        add('giaitru', 'Giải Trừ', 12, 'toanhoima', 1)
        //Dia
        add('muada', 'Mưa Đá', 1, 'khong')
        add('cambay', 'Cạm Bẫy', 3, 'muada')
        add('nemda', 'Ném Đá', 7, 'cambay')
        add('phisa', 'Phi Sa Tẩu Thạch', 10, 'nemda')
        add('vanma', 'Vạn Mã Phi Đằng', 14, 'phisa')
        add('longtroi', 'Long Trời Lở Đất', 18, 'phisa')
        add('dalan', 'Đá Lăn', 10, 'nemda')
        add('thaison', 'Thái Sơn Ấp Đỉnh', 14, 'dalan')
        add('loimoc', 'Lôi Mộc', 3, 'muada')
        add('caytinh', 'Cây Tinh', 6, 'loimoc')
        add('dianha', 'Địa Nha', 9, 'caytinh')
        add('ketgioi', 'Kết Giới', 12, 'dianha')
        add('giaikg', 'Giải Kết Giới', 1, 'dianha', 1)
        add('kinh', 'Kính', 18, 'ketgioi', 5)
        add('giaikinh', 'Giải Kính', 1, 'ketgioi', 1)
        //Phong
        add('nguphong', 'Ngự Phong', 1, 'khong')
        add('lantranh', 'Lẩn Tránh', 4, 'nguphong', 5)
        add('anminh', 'Ẩn Mình', 7, 'lantranh', 5)
        add('phanthan', 'Phân Thân', 13, 'anminh', 1)
        add('phongto', 'Phóng To', 12, 'phanthan', 5)
        add('thunho', 'Thu Nhỏ', 12, 'phanthan', 5)
        add('nguyenkhi', 'Nguyên Khí', 15, ['phongto', 'thunho'])
        add('tuyenphong', 'Tuyền Phong', 3, 'nguphong', 5)
        add('cuongphong', 'Cuồng Phong', 6, 'tuyenphong')
        add('huyenkich', 'Huyền Kích', 10, 'cuongphong')
        add('lienkich', 'Liên Kích', 13, 'huyenkich')
        add('loankich', 'Loạn Kích', 16, 'lienkich')
        add('baophong', 'Bão Phong', 11, 'cuongphong')
        add('phongcuon', 'Phong Cuốn Tàn Vân', 16, 'baophong')
        //Hoa chuyen sinh
        add('hoakhi', 'Hỏa Khí', 1, ['bachhong', 'lieunguyen', 'tamvi'])
        add('diemvonhi', 'Diễm Vô Nhị', 11, 'hoakhi')
        add('nguloi', 'Ngũ Lôi', 13, 'diemvonhi')
        add('cuongno', 'Cuồng Nộ', 15, 'nguloi', 5)
        add('cuukiem', 'Cửu Kiếm', 8, 'hoakhi')
        add('hoahothan', 'Hỏa Hộ Thân', 10, 'cuukiem', 5)
        add('cuonglong', 'Cuồng Long', 18, 'hoahothan')
        //Thuy chuyen sinh
        add('thuykhi', 'Thủy Khí', 1, ['bangphong', 'tanbang', 'hoisinh', 'giaitru'])
        add('bangtram', 'Băng Trảm', 7, 'thuykhi')
        add('bangphach', 'Băng Phách', 9, 'bangtram')
        add('bangthuong', 'Băng Thương', 12, 'bangphach')
        add('dinhthuy', 'Đình Thủy', 10, 'thuykhi', 5)
        add('tranggiai', 'Trạng Giải', 15, 'dinhthuy', 1)
        add('mieuthuy', 'Miêu Thủy', 15, 'tranggiai')
        //Dia chuyen sinh
        add('diakhi', 'Địa Khí', 1, ['vanma', 'longtroi', 'thaison', 'kinh', 'giaikinh', 'giaikg'])
        add('diadong', 'Địa Động', 7, 'diakhi')
        add('hoangtho', 'Hoàng Thổ', 9, 'diadong')
        add('khutuong', 'Khu Tượng', 13, 'hoangtho')
        add('dialiet', 'Địa Liệt', 8, 'diakhi')
        add('thobang', 'Thổ Băng', 11, 'dialiet', 5)
        add('linhkinh', 'Linh Kính', 15, 'thobang', 5)
        //Phong chuyen sinh
        add('phongkhi', 'Phong Khí', 1, ['nguyenkhi', 'loankich', 'phongcuon'])
        add('lietphong', 'Liệt Phong', 8, 'phongkhi')
        add('huyenanh', 'Huyễn Ảnh', 11, 'lietphong')
        add('phongthan', 'Phong Thần', 12, 'huyenanh')
        add('dauchuyen', 'Đẩu Chuyển', 9, 'phongkhi', 5)
        add('phongchi', 'Phong Chi', 10, 'dauchuyen', 5)
        add('vohinh', 'Vô Hình', 15, 'phongchi', 5)
        //Ba
        add('daichuthien', 'Đại Chu Thiên', 1, ['hoakhi', 'thuykhi', 'diakhi', 'phongkhi'])
        add('bakhi', 'Bá Khí', 1, 'daichuthien')
        add('bay', 'Bá Ý', 1, 'daichuthien', 5)
        add('songcuong', 'Sóng Cuồng', 1, 'daichuthien', 5)
        add('lucbat', 'Lực Bạt Sơn Hề', 1, 'daichuthien')
        //Hien
        add('trithu', 'Trí Thủ', 1, 'daichuthien')
        add('sachdong', 'Sách Động', 1, 'daichuthien')
        add('dungke', 'Dùng Kế', 1, 'daichuthien')
        add('chongdich', 'Chống Địch', 1, 'daichuthien')
        //Tien
        add('cankhon', 'Càn Khôn Thiên Lôi', 1, 'daichuthien', 5)
        add('hoahuyet', 'Hỏa Huyết Đan Hồn', 1, 'daichuthien', 5)
        add('thanhlinh', 'Thánh Linh Thuật', 1, 'daichuthien', 5)
        add('tienkhieu', 'Tiên Khiếu', 1, 'daichuthien')
        //Hiep
        add('tamnhan', 'Tâm Nhãn', 1, 'daichuthien')
        add('ngungkhi', 'Ngưng Khí Hộ Thân', 1, 'daichuthien')
        add('anhkhi', 'Anh Khí Hộ Thân', 1, 'daichuthien')
        add('thienthuan', 'Thiên Thần Thuẫn', 1, 'daichuthien', 5)
        //Hoa tai sinh
        add('nhatkich', 'Nhất Kích', 7, 'hoitam')
        add('duongviem', 'Dương Viêm', 10, 'bachhong')
        add('haohoa', 'Hào Hỏa', 9, 'batdien')
        add('xichlong', 'Xích Long Cự', 5, 'hoacau')
        add('trieulam', 'Triệu Lâm', 9, 'hoalong')
        add('phanda', 'Phần Dã', 9, 'lieunguyen')
        add('chanhe', 'Chấn Hề', 16, 'nguloi')
        add('liettram', 'Liệt Trảm', 16, 'cuonglong')
        //Thuy tai sinh
        add('thienbang', 'Thiên Băng Vũ', 5, 'bangphong', 5)
        add('suongquyen', 'Sương Quyền', 5, 'bangphong', 5)
        add('camlam', 'Cam Lâm', 7, 'toantrilieu')
        add('mathuat', 'Ma Thuật', 7, 'toanhoima')
        add('nhatthiem', 'Nhất Thiểm', 9, 'bangphach')
        add('lucbangvu', 'Lục Băng Vũ', 14, 'bangthuong')
        add('votuong', 'Vô Tưởng', 10, 'dinhthuy', 5)
        add('giaithuat', 'Giải Thuật', 15, 'tranggiai', 1)
        //Dia tai sinh
        add('thietphao', 'Thiết Pháo', 7, 'nemda')
        add('tinhphao', 'Tinh Pháo', 10, 'phisa')
        add('chanba', 'Chấn Ba', 8, 'thaison')
        add('xungphong', 'Xung Phong', 8, 'vanma')
        add('chungtrao', 'Chung Trạo', 12, 'kinh', 5)
        add('honphu', 'Hồn Phủ', 8, 'dialiet')
        add('boccam', 'Bộc Cầm', 8, 'thobang', 5)
        add('vuongsat', 'Vương Sát', 15, 'hoangtho')
        //Phong tai sinh
        add('thanthuat', 'Thân Thuật', 9, 'anminh', 5)
        add('huthon', 'Hút Hồn', 9, 'nguyenkhi', 5)
        add('phikiem', 'Phi Kiếm', 4, 'cuongphong')
        add('chandien', 'Chấn Điện', 8, 'loankich')
        add('thanly', 'Thần Ly', 9, 'baophong')
        add('bangloi', 'Băng Lôi', 11, 'phongcuon')
        add('soncuong', 'Sơn Cương', 9, 'huyenanh')
        add('loiminh', 'Lôi Minh', 11, 'phongthan')

        //add('', '', 0, '')

        return {
            skills
        }
    }
}

export default Skill