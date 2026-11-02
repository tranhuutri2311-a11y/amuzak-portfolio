/**
 * Project Visual Previews (High-resolution screenshots with In-Page Lightbox triggers)
 */
const projectVisuals = {
    project1: `
        <div class="w-full rounded-xl overflow-hidden border border-surfaceBorder bg-surfaceMuted shadow-2xl relative group">
            <button type="button" onclick="openImageModal('assets/huyhoang.jpg', 'Huyhoang JSC Enterprise Platform')" class="w-full text-left block relative group cursor-zoom-in" title="Click to view full image in modal">
                <img src="assets/huyhoang.jpg" alt="Huyhoang JSC Enterprise Platform" class="w-full h-auto object-cover rounded-xl transition-all duration-300 group-hover:brightness-105" loading="lazy">
                <div class="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md border border-white/20 text-[11px] font-mono text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 shadow-lg">
                    <i data-lucide="maximize-2" class="w-3.5 h-3.5"></i>
                    <span>View Full Image</span>
                </div>
            </button>
        </div>
    `,
    project2: `
        <div class="w-full rounded-xl overflow-hidden border border-surfaceBorder bg-surfaceMuted shadow-2xl relative group">
            <button type="button" onclick="openImageModal('assets/moneymate.png', 'MoneyMate — Live Deployment & Android Companion')" class="w-full text-left block relative group cursor-zoom-in" title="Click to view full image in modal">
                <img src="assets/moneymate.png" alt="MoneyMate Application" class="w-full h-auto object-cover rounded-xl transition-all duration-300 group-hover:brightness-105" loading="lazy">
                <div class="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md border border-white/20 text-[11px] font-mono text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 shadow-lg">
                    <i data-lucide="maximize-2" class="w-3.5 h-3.5"></i>
                    <span>View Full Image</span>
                </div>
            </button>
        </div>
    `,
    project3: `
        <div class="w-full rounded-xl overflow-hidden border border-surfaceBorder bg-surfaceMuted shadow-2xl relative group">
            <button type="button" onclick="openImageModal('assets/viphenix.png', 'Viphenix Global Technical Solutions Corporate Portal')" class="w-full text-left block relative group cursor-zoom-in" title="Click to view full image in modal">
                <img src="assets/viphenix.png" alt="Viphenix Global Technical Solutions" class="w-full h-auto object-cover rounded-xl transition-all duration-300 group-hover:brightness-105" loading="lazy">
                <div class="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md border border-white/20 text-[11px] font-mono text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 shadow-lg">
                    <i data-lucide="maximize-2" class="w-3.5 h-3.5"></i>
                    <span>View Full Image</span>
                </div>
            </button>
        </div>
    `
};

/**
 * Detailed Case Study Content (Bilingual specifications)
 */
const projectModalContent = {
    en: {
        project1: {
            tag: "HUYHOANGJSC ENTERPRISE ARCHITECTURE",
            title: "Huyhoangjsc Enterprise Platform (HRM & Real-time Chat)",
            visualKey: "project1",
            imageCaption: "Huyhoangjsc Live Corporate & Enterprise Web System",
            content: `
                <p><strong>Business Context:</strong> Enterprise-grade digital workflow platform powering <a href="https://home.huyhoangjsc.com" target="_blank" rel="noopener noreferrer" class="text-white underline">Huyhoangjsc</a>. The infrastructure cleanly segregates two contradictory workload profiles: computationally heavy batch processing (HRM) and ultra-low latency event loops (Chat).</p>
                <div class="p-3 rounded-lg bg-surfaceMuted border border-surfaceBorder space-y-2">
                    <div class="text-xs font-mono text-white font-semibold">1. Human Resource Management Engine (HRM)</div>
                    <p class="text-xs text-neutral-300 leading-relaxed">
                        Manages shift tracking, payroll computation, attendance logs, and multi-tenant reporting. Heavy batch execution is delegated to distributed <code>BullMQ + Redis</code> worker queues, ensuring zero latency blockage on main HTTP threads. Critical payroll ledgers adhere to strict ACID transactions inside <code>PostgreSQL</code>.
                    </p>
                </div>
                <div class="p-3 rounded-lg bg-surfaceMuted border border-surfaceBorder space-y-2">
                    <div class="text-xs font-mono text-white font-semibold">2. Real-time Enterprise Chat Service</div>
                    <p class="text-xs text-neutral-300 leading-relaxed">
                        Provides bidirectional <code>WebSocket</code> communication channels for inter-departmental instant messaging and live online presence. Message schemas and conversation timelines are indexed in <code>MongoDB</code> for ultra-fast time-series reading and writing.
                    </p>
                </div>
                <p class="text-xs text-neutral-400">
                    <strong>Media & Asset Distribution:</strong> Employee contracts (HRM) and multimedia attachments (Chat) are transferred directly through secure <code>AWS S3 Pre-signed URLs</code>, bypassing web server proxies and optimizing bandwidth efficiency.
                </p>
            `
        },
        project2: {
            tag: "FINTECH & MOBILE-BACKEND INTEGRATION",
            title: "MoneyMate — Automatic Bank Transaction Tracker via OS Push Alerts",
            visualKey: "project2",
            imageCaption: "MoneyMate Official Interface & Android Companion Live Deployment",
            content: `
                <p><strong>Context & Solved Problem:</strong> Conventional financial trackers fail because users tire of manual data logging. MoneyMate automates 100% of income/expense tracking by intercepting banking balance mutations directly from Android OS notification listeners. Live platform showcase: <a href="https://moneymate.hostless.site/about" target="_blank" rel="noopener noreferrer" class="text-white underline">moneymate.hostless.site/about</a>.</p>
                <div class="p-3 rounded-lg bg-surfaceMuted border border-surfaceBorder space-y-2">
                    <div class="text-xs font-mono text-white font-semibold">Core Engineering & Capabilities:</div>
                    <ul class="list-disc list-inside space-y-1.5 text-xs text-neutral-300">
                        <li><strong>Android Native Background Daemon:</strong> Persistent <code>NotificationListenerService</code> operating 24/7 (Doze-resistant) to parse push alerts from major Vietnamese banks (VCB, TCB, MB, ACB, ShopeePay...).</li>
                        <li><strong>On-Device Regex Extraction:</strong> Client-side text parsing for amounts (+/-), timestamps, and accounts to safeguard privacy before transmitting to servers.</li>
                        <li><strong>Spring Boot & PostgreSQL Backend:</strong> Secure REST endpoints featuring idempotency tokens to prevent duplicate mutations, paired with automatic expense categorization.</li>
                        <li><strong>React Dashboard:</strong> Responsive financial health suite with real-time Net Worth visualizations, ledger history, and monthly spending insights.</li>
                    </ul>
                </div>
            `
        },
        project3: {
            tag: "HIGH-PERFORMANCE CLIENT DELIVERY",
            title: "Viphenix Global Technical Solutions Corporate Portal",
            visualKey: "project3",
            imageCaption: "Viphenix Global Technical Solutions International Portal",
            content: `
                <p><strong>Business Context:</strong> Official portal for <a href="https://viphenix-tech.com" target="_blank" rel="noopener noreferrer" class="text-white underline">Viphenix Global Technical Solutions Ltd. (viphenix-tech.com)</a> — specialized in technical consulting for energy optimization (gasification, CO₂ reduction) and cross-border trade facilitation (China-Qatar, Italy-Vietnam, England-Vietnam).</p>
                <div class="p-3 rounded-lg bg-surfaceMuted border border-surfaceBorder space-y-2">
                    <div class="text-xs font-mono text-white font-semibold">Architecture & Performance Highlights:</div>
                    <ul class="list-disc list-inside space-y-1.5 text-xs text-neutral-300">
                        <li><strong>Static Architecture via Astro:</strong> Zero runtime JavaScript payload by default, producing instant page loads and perfect Core Web Vitals (FCP < 0.4s).</li>
                        <li><strong>Lightweight i18n Engine:</strong> Hand-crafted Vanilla JS internationalization module offering seamless multi-language navigation without bundle bloat.</li>
                        <li><strong>Technical SEO Foundation:</strong> Rigorous structured data implementation with <code>JSON-LD Schema (Organization, Services)</code>, automated XML sitemaps, and OpenGraph metadata.</li>
                        <li><strong>Automated Netlify CI/CD:</strong> Git-triggered build pipelines distributed across worldwide CDN edge servers for global reliability.</li>
                    </ul>
                </div>
            `
        }
    },
    vi: {
        project1: {
            tag: "KIẾN TRÚC DOANH NGHIỆP HUYHOANGJSC",
            title: "Huyhoangjsc Enterprise Platform (HRM & Real-time Chat)",
            visualKey: "project1",
            imageCaption: "Hệ thống Quản trị Doanh nghiệp Trực tiếp Huyhoangjsc",
            content: `
                <p><strong>Nghiệp vụ & Bối cảnh:</strong> Hệ sinh thái giải pháp số hóa quản trị cho <a href="https://home.huyhoangjsc.com" target="_blank" rel="noopener noreferrer" class="text-white underline">Huyhoangjsc</a>. Nền tảng phân tách thành hai phân hệ chuyên biệt để đáp ứng đồng thời 2 bài toán tải ngược nhau: một bên cần xử lý dữ liệu nặng và tính toán phức tạp (HRM), một bên đòi hỏi độ trễ cực thấp (Chat).</p>
                <div class="p-3 rounded-lg bg-surfaceMuted border border-surfaceBorder space-y-2">
                    <div class="text-xs font-mono text-white font-semibold">1. Phân hệ Quản trị Nhân sự (HRM Module)</div>
                    <p class="text-xs text-neutral-300 leading-relaxed">
                        Xử lý các nghiệp vụ tính công, chấm ca, chốt lương và kết xuất báo cáo tổng hợp. Toàn bộ logic nặng được đẩy vào hàng đợi <code>BullMQ + Redis</code> để thực thi ngầm qua Worker, trả quyền phản hồi lập tức cho giao diện người dùng. Dữ liệu bảng lương và hợp đồng được lưu trữ nghiêm ngặt trong <code>PostgreSQL</code> với chuẩn ACID.
                    </p>
                </div>
                <div class="p-3 rounded-lg bg-surfaceMuted border border-surfaceBorder space-y-2">
                    <div class="text-xs font-mono text-white font-semibold">2. Phân hệ Trò chuyện Thời gian thực (Chat Module)</div>
                    <p class="text-xs text-neutral-300 leading-relaxed">
                        Cung cấp kết nối <code>WebSocket</code> hai chiều cho phép nhân viên trao đổi tin nhắn phòng ban tức thì, đồng bộ trạng thái trực tuyến. Lưu trữ lược đồ tin nhắn, hội thoại dạng tài liệu động trong <code>MongoDB</code> nhằm tối ưu hóa tốc độ ghi/đọc theo chuỗi thời gian.
                    </p>
                </div>
                <p class="text-xs text-neutral-400">
                    <strong>Tài nguyên & Media:</strong> Toàn bộ hợp đồng số hóa (HRM) và hình ảnh, file đính kèm trong hội thoại (Chat) được truyền tải trực tiếp qua <code>AWS S3 Pre-signed URLs</code>, loại bỏ hoàn toàn tải trung chuyển qua máy chủ backend.
                </p>
            `
        },
        project2: {
            tag: "FINTECH & TÍCH HỢP HỆ THỐNG DI ĐỘNG",
            title: "MoneyMate — Theo dõi biến động số dư ngân hàng qua thông báo hệ điều hành",
            visualKey: "project2",
            imageCaption: "Giao diện MoneyMate và Ứng dụng Android Companion Hoạt động Thực tế",
            content: `
                <p><strong>Bối cảnh & Vấn đề giải quyết:</strong> Các ứng dụng quản lý tài chính cá nhân thường thất bại vì người dùng lười nhập tay thủ công. MoneyMate tự động hóa 100% dòng tiền bằng cách thu thập biến động số dư theo thời gian thực trực tiếp từ hệ thống thông báo của Android. Cổng giới thiệu & triển khai: <a href="https://moneymate.hostless.site/about" target="_blank" rel="noopener noreferrer" class="text-white underline">moneymate.hostless.site/about</a>.</p>
                <div class="p-3 rounded-lg bg-surfaceMuted border border-surfaceBorder space-y-2">
                    <div class="text-xs font-mono text-white font-semibold">Kỹ thuật Cốt lõi & Tính năng độc đáo:</div>
                    <ul class="list-disc list-inside space-y-1.5 text-xs text-neutral-300">
                        <li><strong>Android Native Background Daemon:</strong> Sử dụng <code>NotificationListenerService</code> chạy thường trực 24/7 (kháng Doze mode) để đón nhận thông báo từ các ứng dụng ngân hàng tại Việt Nam (VCB, TCB, MB, ACB, ShopeePay...).</li>
                        <li><strong>Offline Regex Engine:</strong> Thuật toán bóc tách cú pháp tin nhắn ngay tại thiết bị để lấy: số tiền (+/-), thời gian, tài khoản nguồn và nội dung giao dịch nhằm bảo vệ quyền riêng tư người dùng.</li>
                        <li><strong>Spring Boot & PostgreSQL Backend:</strong> API bảo mật xử lý giao dịch kép, chống ghi trùng (idempotency key), hỗ trợ báo cáo phân loại danh mục tự động.</li>
                        <li><strong>React Dashboard:</strong> Giao diện tổng quan Net Worth, biểu đồ thu chi và danh sách biến động trực quan.</li>
                    </ul>
                </div>
            `
        },
        project3: {
            tag: "BÀN GIAO SẢN PHẨM HIỆU NĂNG CAO",
            title: "Viphenix Global Technical Solutions — Cổng thông tin Quốc tế Tốc độ cao",
            visualKey: "project3",
            imageCaption: "Giao diện Cổng thông tin Quốc tế Viphenix Global Technical Solutions",
            content: `
                <p><strong>Nghiệp vụ & Bối cảnh:</strong> Cổng thông tin đại diện chính thức cho <a href="https://viphenix-tech.com" target="_blank" rel="noopener noreferrer" class="text-white underline">Viphenix Global Technical Solutions Ltd. (viphenix-tech.com)</a> — đơn vị tư vấn kỹ thuật năng lượng (khí hóa sinh khối, tối ưu hóa phát thải CO₂) và xúc tiến thương mại quốc tế (China - Qatar, Italy - Vietnam, England - Vietnam).</p>
                <div class="p-3 rounded-lg bg-surfaceMuted border border-surfaceBorder space-y-2">
                    <div class="text-xs font-mono text-white font-semibold">Điểm nhấn Kiến trúc & Hiệu năng:</div>
                    <ul class="list-disc list-inside space-y-1.5 text-xs text-neutral-300">
                        <li><strong>Static Engine với Astro:</strong> Lựa chọn kiến trúc tĩnh giúp tối thiểu dung lượng JavaScript gửi tới trình duyệt, đạt điểm Core Web Vitals tuyệt đối và thời gian phản hồi First Contentful Paint < 0.4s.</li>
                        <li><strong>i18n Tối giản:</strong> Cơ chế đa ngôn ngữ chạy mượt bằng JavaScript thuần (Vanilla JS), không gây phình dung lượng bundle (zero heavy framework overhead).</li>
                        <li><strong>Technical SEO Hoàn chỉnh:</strong> Cấu hình đầy đủ lược đồ ngữ nghĩa <code>JSON-LD Schema (Organization, Service)</code>, thẻ canonical, sitemap.xml tự động cập nhật giúp tối ưu thứ hạng hiển thị đối tác trên Google.</li>
                        <li><strong>Netlify CI/CD:</strong> Tự động hóa kiểm thử và phát hành trang qua quy trình build Netlify, tận dụng mạng lưới CDN toàn cầu phục vụ khách hàng đa quốc gia.</li>
                    </ul>
                </div>
            `
        }
    }
};

if (typeof window !== 'undefined') {
    window.projectVisuals = projectVisuals;
    window.projectModalContent = projectModalContent;
}
