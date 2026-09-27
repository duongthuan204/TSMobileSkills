var Model = {
    getSkills: function () {
        function checkMax(max) {
            if (max > 0) return max
            return 10
        }
        function add(id, name, type, pointRequire, skillRequire, pointMax) {
            let skill = {
                [id]:
                {
                    id: id,
                    name: name,
                    type: type,
                    point: 0,
                    pointRequire: pointRequire,
                    skillRequire: skillRequire,
                    pointMax: checkMax(pointMax)
                }
            }
            skills = { ...skills, ...skill }
        }
        var skills = {}
        add('select', 'Chọn kĩ năng', 'nghe', 0, 'khong')
        add('black', 'Ô trống', 'nghe', 0, 'khong')
        //Hoa
        add('phunghoang', 'Phụng Hoàng', 'hoa', 0, 'trieugoi')
        add('phonghoa', 'Phóng Hỏa', 'hoa', 1, 'khong')
        add('hoatien', 'Hỏa Tiễn', 'hoa', 4, 'phonghoa')
        add('hoitam', 'Hội Tâm Nhất Kích', 'hoa', 7, 'hoatien')
        add('hoakiem', 'Hỏa Kiếm', 'hoa', 9, 'hoitam')
        add('cuongdiem', 'Cuồng Điện Trảm', 'hoa', 12, 'hoakiem')
        add('bachhong', 'Bạch Hồng Quán Nhật', 'hoa', 16, 'cuongdiem')
        add('liethoa', 'Liệt Hỏa', 'hoa', 3, 'phonghoa')
        add('hoaluan', 'Hỏa Luân', 'hoa', 6, 'liethoa')
        add('phonghoaluan', 'Phong Hỏa Luân', 'hoa', 10, 'hoaluan')
        add('batdien', 'Bát Diện Hỏa Luân', 'hoa', 13, 'phonghoaluan')
        add('lieunguyen', 'Liêu Nguyên Hỏa', 'hoa', 16, 'batdien')
        add('hoacau', 'Hỏa Cầu', 'hoa', 7, 'liethoa')
        add('vudieu', 'Vũ Điệu Nóng Bỏng', 'hoa', 10, 'hoacau')
        add('hoalong', 'Hỏa Long', 'hoa', 12, 'vudieu')
        add('tamvi', 'Tam Vị Chân Hỏa', 'hoa', 16, 'hoalong')
        //Thuy
        add('thuythan', 'Thủy Thần', 'thuy', 0, 'trieugoi')
        add('nuocngap', 'Nước Ngập', 'thuy', 1, 'khong')
        add('bangkiem', 'Băng Kiếm', 'thuy', 3, 'nuocngap')
        add('dungtuyen', 'Dũng Tuyền', 'thuy', 5, 'bangkiem')
        add('hongthuy', 'Hồng Thủy', 'thuy', 8, 'dungtuyen')
        add('bangda', 'Băng Đá', 'thuy', 9, 'hongthuy')
        add('bangphong', 'Băng Phong', 'thuy', 16, 'bangda')
        add('tanbang', 'Tan Băng', 'thuy', 1, 'bangda', 1)
        add('bangtuong', 'Băng Tường', 'thuy', 4, 'nuocngap', 5)
        add('thanhluu', 'Thanh Lưu', 'thuy', 6, 'bangtuong')
        add('trilieu', 'Trị Liệu', 'thuy', 8, 'thanhluu')
        add('toantrilieu', 'Toàn Trị Liệu', 'thuy', 9, 'trilieu')
        add('hoisinh', 'Hồi Sinh', 'thuy', 12, 'toantrilieu')
        add('hoima', 'Hồi Ma', 'thuy', 8, 'thanhluu')
        add('toanhoima', 'Toàn Hồi Ma', 'thuy', 9, 'hoima')
        add('giaitru', 'Giải Trừ', 'thuy', 12, 'toanhoima', 1)
        //Dia
        add('nhamquai', 'Nham Quái', 'dia', 0, 'trieugoi')
        add('muada', 'Mưa Đá', 'dia', 1, 'khong')
        add('cambay', 'Cạm Bẫy', 'dia', 3, 'muada')
        add('nemda', 'Ném Đá', 'dia', 7, 'cambay')
        add('phisa', 'Phi Sa Tẩu Thạch', 'dia', 10, 'nemda')
        add('vanma', 'Vạn Mã Phi Đằng', 'dia', 14, 'phisa')
        add('longtroi', 'Long Trời Lở Đất', 'dia', 18, 'phisa')
        add('dalan', 'Đá Lăn', 'dia', 10, 'nemda')
        add('thaison', 'Thái Sơn Ấp Đỉnh', 'dia', 14, 'dalan')
        add('loimoc', 'Lôi Mộc', 'dia', 3, 'muada')
        add('caytinh', 'Cây Tinh', 'dia', 6, 'loimoc')
        add('dianha', 'Địa Nha', 'dia', 9, 'caytinh')
        add('ketgioi', 'Kết Giới', 'dia', 12, 'dianha')
        add('giaikg', 'Giải Kết Giới', 'dia', 1, 'dianha', 1)
        add('kinh', 'Kính', 'dia', 18, 'ketgioi', 5)
        add('giaikinh', 'Giải Kính', 'dia', 1, 'ketgioi', 1)
        //Phong
        add('thanhlong', 'Thanh Long', 'phong', 0, 'trieugoi')
        add('nguphong', 'Ngự Phong', 'phong', 1, 'khong')
        add('lantranh', 'Lẩn Tránh', 'phong', 4, 'nguphong', 5)
        add('anminh', 'Ẩn Mình', 'phong', 7, 'lantranh', 5)
        add('phanthan', 'Phân Thân', 'phong', 13, 'anminh', 1)
        add('phongto', 'Phóng To', 'phong', 12, 'phanthan', 5)
        add('thunho', 'Thu Nhỏ', 'phong', 12, 'phanthan', 5)
        add('nguyenkhi', 'Nguyên Khí', 'phong', 15, ['phongto', 'thunho'])
        add('tuyenphong', 'Tuyền Phong', 'phong', 3, 'nguphong', 5)
        add('cuongphong', 'Cuồng Phong', 'phong', 6, 'tuyenphong')
        add('huyenkich', 'Huyền Kích', 'phong', 10, 'cuongphong')
        add('lienkich', 'Liên Kích', 'phong', 13, 'huyenkich')
        add('loankich', 'Loạn Kích', 'phong', 16, 'lienkich')
        add('baophong', 'Bão Phong', 'phong', 11, 'cuongphong')
        add('phongcuon', 'Phong Cuốn Tàn Vân', 'phong', 16, 'baophong')
        //Hoa chuyen sinh
        add('hoakhi', 'Hỏa Khí', 'hoa', 1, ['bachhong', 'lieunguyen', 'tamvi'])
        add('diemvonhi', 'Diễm Vô Nhị', 'hoa', 11, 'hoakhi')
        add('nguloi', 'Ngũ Lôi', 'hoa', 13, 'diemvonhi')
        add('cuongno', 'Cuồng Nộ', 'hoa', 15, 'nguloi', 5)
        add('cuukiem', 'Cửu Kiếm', 'hoa', 8, 'hoakhi')
        add('hoahothan', 'Hỏa Hộ Thân', 'hoa', 10, 'cuukiem', 5)
        add('cuonglong', 'Cuồng Long', 'hoa', 18, 'hoahothan')
        //Thuy chuyen sinh
        add('thuykhi', 'Thủy Khí', 'thuy', 1, ['bangphong', 'tanbang', 'hoisinh', 'giaitru'])
        add('bangtram', 'Băng Trảm', 'thuy', 7, 'thuykhi')
        add('bangphach', 'Băng Phách', 'thuy', 9, 'bangtram')
        add('bangthuong', 'Băng Thương', 'thuy', 12, 'bangphach')
        add('dinhthuy', 'Đình Thủy', 'thuy', 10, 'thuykhi', 5)
        add('tranggiai', 'Trạng Giải', 'thuy', 15, 'dinhthuy', 1)
        add('mieuthuy', 'Miêu Thủy', 'thuy', 15, 'tranggiai')
        //Dia chuyen sinh
        add('diakhi', 'Địa Khí', 'dia', 1, ['vanma', 'longtroi', 'thaison', 'kinh', 'giaikinh', 'giaikg'])
        add('diadong', 'Địa Động', 'dia', 7, 'diakhi')
        add('hoangtho', 'Hoàng Thổ', 'dia', 9, 'diadong')
        add('khutuong', 'Khu Tượng', 'dia', 13, 'hoangtho')
        add('dialiet', 'Địa Liệt', 'dia', 8, 'diakhi')
        add('thobang', 'Thổ Băng', 'dia', 11, 'dialiet', 5)
        add('linhkinh', 'Linh Kính', 'dia', 15, 'thobang', 5)
        //Phong chuyen sinh
        add('phongkhi', 'Phong Khí', 'phong', 1, ['nguyenkhi', 'loankich', 'phongcuon'])
        add('lietphong', 'Liệt Phong', 'phong', 8, 'phongkhi')
        add('huyenanh', 'Huyễn Ảnh', 'phong', 11, 'lietphong')
        add('phongthan', 'Phong Thần', 'phong', 12, 'huyenanh')
        add('dauchuyen', 'Đẩu Chuyển', 'phong', 9, 'phongkhi', 5)
        add('phongchi', 'Phong Chi', 'phong', 10, 'dauchuyen', 5)
        add('vohinh', 'Vô Hình', 'phong', 15, 'phongchi', 5)
        //Ba
        add('daichuthien', 'Đại Chu Thiên', 'nghe', 1, ['hoakhi', 'thuykhi', 'diakhi', 'phongkhi'])
        add('bakhi', 'Bá Khí', 'nghe', 1, 'daichuthien')
        add('bay', 'Bá Ý', 'nghe', 1, 'daichuthien', 5)
        add('songcuong', 'Sóng Cuồng', 'nghe', 1, 'daichuthien', 5)
        add('lucbat', 'Lực Bạt Sơn Hề', 'nghe', 1, 'daichuthien')
        //Hien
        add('trithu', 'Trí Thủ', 'nghe', 1, 'daichuthien')
        add('sachdong', 'Sách Động', 'nghe', 1, 'daichuthien')
        add('dungke', 'Dùng Kế', 'nghe', 1, 'daichuthien')
        add('chongdich', 'Chống Địch', 'nghe', 1, 'daichuthien')
        //Tien
        add('cankhon', 'Càn Khôn Thiên Lôi', 'nghe', 1, 'daichuthien', 5)
        add('hoahuyet', 'Hỏa Huyết Đan Hồn', 'nghe', 1, 'daichuthien', 5)
        add('thanhlinh', 'Thánh Linh Thuật', 'nghe', 1, 'daichuthien', 5)
        add('tienkhieu', 'Tiên Khiếu', 'nghe', 1, 'daichuthien')
        //Hiep
        add('tamnhan', 'Tâm Nhãn', 'nghe', 1, 'daichuthien')
        add('ngungkhi', 'Ngưng Khí Hộ Thân', 'nghe', 1, 'daichuthien')
        add('anhkhi', 'Anh Khí Hộ Thân', 'nghe', 1, 'daichuthien')
        add('thienthuan', 'Thiên Thần Thuẫn', 'nghe', 1, 'daichuthien', 5)
        //Hoa tai sinh
        add('nhatkich', 'Nhất Kích', 'hoa', 7, 'hoitam')
        add('duongviem', 'Dương Viêm', 'hoa', 10, 'bachhong')
        add('haohoa', 'Hào Hỏa', 'hoa', 9, 'batdien')
        add('xichlong', 'Xích Long Cự', 'hoa', 5, 'hoacau')
        add('trieulam', 'Triệu Lâm', 'hoa', 9, 'hoalong')
        add('phanda', 'Phần Dã', 'hoa', 9, 'lieunguyen')
        add('chanhe', 'Chấn Hề', 'hoa', 16, 'nguloi')
        add('liettram', 'Liệt Trảm', 'hoa', 16, 'cuonglong')
        //Thuy tai sinh
        add('thienbang', 'Thiên Băng Vũ', 'thuy', 5, 'bangphong', 5)
        add('suongquyen', 'Sương Quyền', 'thuy', 5, 'bangphong', 5)
        add('camlam', 'Cam Lâm', 'thuy', 7, 'toantrilieu')
        add('mathuat', 'Ma Thuật', 'thuy', 7, 'toanhoima')
        add('nhatthiem', 'Nhất Thiểm', 'thuy', 9, 'bangphach')
        add('lucbangvu', 'Lục Băng Vũ', 'thuy', 14, 'bangthuong')
        add('votuong', 'Vô Tưởng', 'thuy', 10, 'dinhthuy', 5)
        add('giaithuat', 'Giải Thuật', 'thuy', 15, 'tranggiai', 1)
        //Dia tai sinh
        add('thietphao', 'Thiết Pháo', 'dia', 7, 'nemda')
        add('tinhphao', 'Tinh Pháo', 'dia', 10, 'phisa')
        add('chanba', 'Chấn Ba', 'dia', 8, 'thaison')
        add('xungphong', 'Xung Phong', 'dia', 8, 'vanma')
        add('chungtrao', 'Chung Trạo', 'dia', 12, 'kinh')
        add('honphu', 'Hồn Phủ', 'dia', 8, 'dialiet')
        add('boccam', 'Bộc Cầm', 'dia', 8, 'thobang', 5)
        add('vuongsat', 'Vương Sát', 'dia', 15, 'hoangtho')
        //Phong tai sinh
        add('thanthuat', 'Thân Thuật', 'phong', 9, 'anminh', 5)
        add('huthon', 'Hút Hồn', 'phong', 9, 'nguyenkhi', 5)
        add('phikiem', 'Phi Kiếm', 'phong', 4, 'cuongphong')
        add('chandien', 'Chấn Điện', 'phong', 8, 'loankich')
        add('thanly', 'Thần Ly', 'phong', 9, 'baophong')
        add('bangloi', 'Băng Lôi', 'phong', 11, 'phongcuon')
        add('soncuong', 'Sơn Cương', 'phong', 9, 'huyenanh')
        add('loiminh', 'Lôi Minh', 'phong', 11, 'phongthan')
        return { skills }
    },
    getQuick: function () {
        function add(id, arr) {
            let skill = {
                [id]: arr
            }
            quick = { ...quick, ...skill }
        }
        var quick = {}
        add('bachhong', ['phonghoa', 'hoatien', 'hoitam', 'hoakiem', 'cuongdiem'])
        add('lieunguyen', ['phonghoa', 'liethoa', 'hoaluan', 'phonghoaluan', 'batdien'])
        add('tamvi', ['phonghoa', 'liethoa', 'hoacau', 'vudieu', 'hoalong'])
        add('bangphong', ['nuocngap', 'bangkiem', 'dungtuyen', 'hongthuy', 'bangda'])
        add('tanbang', ['nuocngap', 'bangkiem', 'dungtuyen', 'hongthuy', 'bangda'])
        add('hoisinh', ['nuocngap', 'bangtuong', 'thanhluu', 'trilieu', 'toantrilieu'])
        add('giaitru', ['nuocngap', 'bangtuong', 'thanhluu', 'hoima', 'toanhoima'])
        add('nguyenkhi', ['nguphong', 'lantranh', 'anminh', 'phanthan', 'phongto', 'thunho'])
        add('loankich', ['nguphong', 'tuyenphong', 'cuongphong', 'huyenkich', 'lienkich'])
        add('phongcuon', ['nguphong', 'tuyenphong', 'cuongphong', 'baophong'])
        add('vanma', ['muada', 'cambay', 'nemda', 'phisa'])
        add('longtroi', ['muada', 'cambay', 'nemda', 'phisa'])
        add('thaison', ['muada', 'cambay', 'nemda', 'dalan'])
        add('kinh', ['muada', 'loimoc', 'caytinh', 'dianha', 'ketgioi'])
        add('giaikinh', ['muada', 'loimoc', 'caytinh', 'dianha', 'ketgioi'])
        add('giaikg', ['muada', 'loimoc', 'caytinh', 'dianha'])
        add('cuonglong', ['hoakhi','cuukiem', 'hoahothan'])
        add('cuongno', ['hoakhi','diemvonhi', 'nguloi'])
        add('bangthuong',['thuykhi','bangtram','bangphach'])
        add('mieuthuy',['thuykhi','dinhthuy','tranggiai'])
        add('khutuong',['diakhi','diadong','hoangtho'])
        add('linhkinh',['diakhi','dialiet','thobang'])
        add('phongthan',['phongkhi','lietphong','huyenanh'])
        add('vohinh',['phongkhi','dauchuyen','phongchi'])
        add('phanthan',['nguphong', 'lantranh', 'anminh'])
        return { quick }
    },
    getInitData: function () {
        var initData = {
            isLock: false,
            he: localStorage.getItem('char') || 'dia',
            nghe: localStorage.getItem('nghe') || 'ba',
            diem: 0,
            ball: 0,
            ngoc: 0,
            skills: this.getSkills().skills,
            quick: this.getQuick().quick
        }
        return { initData }
    }
}

export default Model