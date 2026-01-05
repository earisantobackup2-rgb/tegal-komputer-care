import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

interface Product {
  name: string;
  description?: string;
  image?: string;
}

const categoryData: Record<string, { title: string; description: string; products: Product[]; backgroundImage: string }> = {
  "pc-laptop-minipc": {
    title: "PC, Laptop & Mini PC",
    description: "Desktop, Notebook, All-in-One, dan Mini PC untuk semua kebutuhan computing Anda",
    backgroundImage: "https://realcomputer.in/image/cache/catalog/Untitled-1920x608.jpg",
    products: [
      {
        name: "MiniPC ASUS NUC 15 PRO+",
        description: "ASUS NUC 15 Pro+ adalah mini PC ringkas bertenaga prosesor Intel® Core™ Ultra (Seri 2) yang menawarkan performa tinggi dengan kapabilitas AI luar biasa (hingga 99 TOPS), menjadikannya powerful untuk multitasking, visualisasi data, dan pengembangan AI, dengan desain yang ringkas (sekitar 0,7 liter).",
        image: "https://dlcdnwebimgs.asus.com/gain/325c67ed-b1b6-4fb5-be56-e57aa0cc34be//fwebp",
      },
      {
        name: "MiniPC MSI Cubi 5",
        description: "MSI Cubi 5 adalah seri mini PC (komputer desktop mini) yang ringkas, hemat energi, dan dirancang untuk produktivitas, cocok untuk penggunaan rumahan, kantor, atau sebagai HTPC, menawarkan performa cukup untuk tugas sehari-hari dan multitasking.",
        image: "https://asset.msi.com/resize/image/global/product/product_16708977283108519e06740cecc56a265b0730da20.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
      },
      {
        name: "ASUS Vivobook 14 A1404VA VIPS3851M Core i3 1315U",
        description: "ASUS Vivobook 14 A1404 adalah seri laptop 14 inci yang dirancang untuk produktivitas sehari-hari, menawarkan performa andal dengan prosesor Intel Core generasi 12 atau 13, desain tipis dan ringan (sekitar 1,4 kg), serta fitur-fitur seperti layar Full HD IPS.",
        image: "https://p16-images-sign-sg.tokopedia-static.net/tos-alisg-i-aphluv4xwc-sg/img/VqbcmM/2025/4/14/9c4ef36c-ca45-409f-9837-4e1bd3839543.jpg~tplv-aphluv4xwc-resize-jpeg:700:0.jpeg?lk3s=0ccea506&x-expires=1767603911&x-signature=jgJvN%2FN%2FjcdA91U%2B%2FNAW%2BgVXNAQ%3D&x-signature-webp=KtGGR6lrAneSCDge079g4nzCEEg%3D",
      },
      {
        name: "ASUS VIVOBOOK GO 15 E1504FA RYZEN 5 7520",
        description: "ASUS VIVOBOOK GO 15 E1504FA RYZEN 5 7520u 16GB 512GB W11+OHS 15\"FHD adalah laptop tipis dan ringan dari seri Vivobook Go ASUS dengan layar 15.6 inci Full HD, ditenagai prosesor AMD Ryzen 5 7520U yang efisien.",
        image: "https://id.store.asus.com/media/catalog/product/v/i/vivobook_go_14_e1404f_e1404g_product_photo_1s_cool_silver_13_numberpad_non-backlit_2.jpg?width=800&height=800&store=id_ID&image-type=image",
      },
      {
        name: "LENOVO IDEAPAD SLIM 5 14 OLED I5 13420H",
        description: "LENOVO IDEAPAD SLIM 5 14 OLED I5 13420H 16GB 1TB W11+OHS 14.0WUXGA BLIT adalah laptop tipis dari Lenovo seri IdeaPad Slim 5 yang dilengkapi layar OLED 14 inci berkualitas tinggi, prosesor Intel Core i5-13420H, cocok untuk penggunaan profesional dan multimedia.",
        image: "https://p16-images-sign-sg.tokopedia-static.net/tos-alisg-i-aphluv4xwc-sg/img/VqbcmM/2024/12/17/43b67429-d924-4e1c-bf0a-8fbe03f470ba.jpg~tplv-aphluv4xwc-resize-jpeg:700:0.jpeg?lk3s=0ccea506&x-expires=1767604274&x-signature=E6joAdOk5LcVCAsL5PTt5rHcAbI%3D&x-signature-webp=Y3KM8ueWK8InTTzTH9kPxCkn9D8%3D",
      },
      {
        name: "LENOVO IDEAPAD FLEX 5 14 RYZEN 7 5825",
        description: "Lenovo IdeaPad Flex 5 14 Ryzen 7 5825 16GB 512GB W11+OHS 14\" WUXGA adalah sebuah laptop konvertibel 2-in-1 dari Lenovo yang ringkas dan fleksibel, ditenagai prosesor AMD Ryzen 7 5825U, memiliki layar sentuh WUXGA 14 inci.",
        image: "https://p16-images-sign-sg.tokopedia-static.net/tos-alisg-i-aphluv4xwc-sg/img/VqbcmM/2025/3/21/cdb393a3-087f-4435-afa4-382e049be5dc.jpg~tplv-aphluv4xwc-resize-jpeg:700:0.jpeg?lk3s=0ccea506&x-expires=1767604403&x-signature=HgzcgTJLkXPxZV31coNs%2Bqq%2FtCQ%3D&x-signature-webp=iVYcMyue0ysUMGbGQpKXsZGAtaQ%3D",
      },
      {
        name: "LAPTOP HP 14 CORE i5 120U 16GB 512GB",
        description: "LAPTOP HP 14 CORE i5 120U 16GB 512GB W11+OHS+M365B 14.0FHD COPILOT 2Yr adalah model laptop HP seri 14 inci dengan prosesor Intel Core i5 generasi ke-12, RAM 16GB, SSD 512GB, layar Full HD 14 inci, dengan fitur AI Copilot dan garansi resmi 2 tahun.",
        image: "https://p16-images-sign-sg.tokopedia-static.net/tos-alisg-i-aphluv4xwc-sg/b96f6b463af94a028b49c99de6154603~tplv-aphluv4xwc-resize-jpeg:700:0.jpeg?lk3s=0ccea506&x-expires=1767604733&x-signature=d0brYiKbE32O8048ZW6cgtzYmPU%3D&x-signature-webp=W0kCaK%2FtEpBqtJlIjbKNx1ZoBF4%3D",
      },
      {
        name: "ADVAN WORKPLUS RYZEN 7 7735HS 16GB 512GB",
        description: "ADVAN WORKPLUS RYZEN 7 7735HS 16GB 512GB W11 14.0FHD IPS adalah sebuah laptop tipis dan ringan dari Advan yang ditujukan untuk profesional dan kreator konten.",
        image: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/97/MTA-168261352/advan_advan_laptop_workplus_amd_ryzen_5_6600h_14--_fhd_ips_16gb_512gb_1_tb__win_11_full01_j7byiz33.jpg",
      },
      {
        name: "Komputer Rakitan i5 Intel Gen 12 - i5 12400 RAM 32GB / SSD 1TB",
        description: "PC Rakitan i5 Intel Gen 12 - i5 12400 RAM 32GB / SSD 1TB PC For Office / Home / School adalah komputer rakitan yang dirancang untuk berbagai penggunaan seperti kantor, rumah, atau sekolah, dengan komponen utama Intel Core i5 Gen 12.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOGxxSNptrUnskMZ54JYNQ47eGa1BGTefWTA&s",
      },
      {
        name: "SLIM PC / Komputer Rakitan Gen 14 Office Intel Core i3-14100",
        description: "SLIM PC / Komputer Rakitan Gen 14 Office Intel Core Gen 14 dengan varian i3-14100, 16GB+256GB NVMe adalah komputer desktop yang dirancang untuk kebutuhan kantor/administrasi/online shop, yang menawarkan kinerja stabil dan efisiensi daya.",
        image: "https://images.tokopedia.net/img/cache/700/VqbcmM/2024/11/14/4a7aabdb-0129-4895-8743-421e96ccdda8.jpg",
      },
    ],
  },
  "server-storage-nas": {
    title: "Server, Storage & NAS",
    description: "Solusi penyimpanan data enterprise dan server terpercaya untuk bisnis Anda",
    backgroundImage: "https://www.cyberwala.com/wp-content/uploads/2021/04/Dell-New-Rack-Server-1536x394.jpg",
    products: [
      {
        name: "PowerEdge R760 Rack Server",
        description: "The 2U, 2 socket Dell PowerEdge R760 enables faster time to value with peak compute performance, through optimum configurations.",
        image: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-enterprise-products/enterprise-systems/poweredge/r760/media-gallery/server-poweredge-r760-black-gallery-4.psd?fmt=png-alpha&pscan=auto&scl=1&wid=3210&hei=1038&qlt=100,1&resMode=sharp2&size=3210,1038&chrss=full&imwidth=5000",
      },
      {
        name: "PowerEdge R760xs Rack Server",
        description: "The Dell PowerEdge R760xs is the best choice for the right balance in performance in an air-cooled chassis for the most popular IT applications.",
        image: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-enterprise-products/enterprise-systems/poweredge/r760xs/media-gallery/server-poweredge-r760xs-black-gallery-5.psd?fmt=png-alpha&pscan=auto&scl=1&wid=3413&hei=992&qlt=100,1&resMode=sharp2&size=3413,992&chrss=full&imwidth=5000",
      },
      {
        name: "PowerEdge T360 Tower Server",
        description: "The 4.5U, single-socket PowerEdge T360 is a specially designed form factor for customers desiring versatility, affordability, and processing power.",
        image: "https://i.dell.com/is/image/DellContent/content/dam/images/products/servers/poweredge/t360/dell-t360-8x3-5-dell-logo-bezel-lf.psd?fmt=png-alpha&pscan=auto&scl=1&wid=5000&hei=5000&qlt=100,1&resMode=sharp2&size=5000,5000&chrss=full&imwidth=5000",
      },
      {
        name: "SYNOLOGY NAS DiskStation DS923+",
        description: "Synology mengumumkan peluncuran NAS 4-bay terbaru, Synology DiskStation DS923+, model terbaru dalam lini seri Plus sebagai perangkat penyimpanan all-in-one untuk penggunaan bisnis dan kantor UMKM.",
        image: "https://www.synology.com/cgi/img?action=getImage&o=news&pic_id=290",
      },
      {
        name: "SYNOLOGY NAS RackStation® RS1619xs+",
        description: "1U rackmount flagship aims for file collaboration and high-performance computation.",
        image: "https://m.media-amazon.com/images/I/41zBKeo3RIL._AC_SL1280_.jpg",
      },
      {
        name: "HPE ProLiant Compute DL320 Gen12",
        description: "The HPE ProLiant DL320 Gen12 maximizes your rack utilization while mitigating virtualization risks in power-constrained environments. Power your workloads with a server providing greater expansion capabilities compared to previous generations.",
        image: "https://www.proliant.ru/files/6904/3549/DL320_Gen12.jpg",
      },
      {
        name: "HPE ProLiant Compute DL380 Gen12",
        description: "The HPE ProLiant Compute DL380 Gen12 is a scalable 2U 2P server that delivers exceptional compute performance, memory density with scalability and high-speed data transfer rate to run your most demanding applications. Powered by Intel® Xeon® 6 processors with up to 144 cores and up to 8 TB of memory.",
        image: "https://www.serverbasket.com/wp-content/uploads/2025/04/HPE-ProLiant-Compute-DL380-Gen12-Server.png",
      },
      {
        name: "Supermicro CloudDC SuperServer SYS-621C-TN12R",
        description: "CloudDC SuperServer SYS-621C-TN12R adalah server kelas enterprise berperforma tinggi yang dirancang untuk kebutuhan data center, cloud computing, dan workload berat seperti virtualisasi, database skala besar, dan AI/enterprise application.",
        image: "https://www.supermicro.com/files_SYS/images/System/SYS-621C-TN12R_main.jpg",
      },
      {
        name: "ASUSTOR NAS LOCKERSTOR 6 Gen3 (AS6806T)",
        description: "ASUSTOR NAS LOCKERSTOR 6 Gen3 (AS6806T) adalah perangkat NAS berperforma tinggi yang dirancang untuk penyimpanan data terpusat, kolaborasi tim, dan kebutuhan bisnis maupun profesional.",
        image: "https://www.asustor.com/images/feature/content_img/AS6806T/banner_model.png",
      },
      {
        name: "ASUS SERVER RS720A-E13-RS24U",
        description: "ASUS Server RS720A-E13-RS24U adalah server rackmount 2U kelas enterprise yang dirancang untuk kebutuhan data center, cloud, virtualisasi, dan workload komputasi intensif.",
        image: "https://dlcdnwebimgs.asus.com/gain/e6cf7181-6156-4bea-a4b7-12f465dc2433/w600",
      },
    ],
  },
  "service-center": {
    title: "Service Center",
    description: "Layanan perbaikan dan maintenance hardware oleh teknisi berpengalaman",
    backgroundImage: "https://img.freepik.com/premium-photo/young-male-technician-fixing-computer-wooden-desk_23-2147922181.jpg",
    products: [
      { name: "Perbaikan Laptop" },
      { name: "Upgrade RAM & SSD" },
      { name: "Install Ulang Windows" },
      { name: "Perbaikan Motherboard" },
      { name: "Cleaning & Maintenance" },
      { name: "Recovery Data" },
      { name: "Perbaikan Printer" },
      { name: "Konsultasi IT" },
    ],
  },
  aksesoris: {
    title: "Aksesoris",
    description: "Keyboard, mouse, headset, dan aksesoris komputer lainnya",
    backgroundImage: "https://i0.wp.com/www.deells.lk/wp-content/uploads/2021/09/logitech-banner-01.png?w=788&ssl=1",
    products: [
      { name: "Keyboard Mechanical" },
      { name: "Mouse Gaming" },
      { name: "Headset Wireless" },
      { name: "Webcam HD" },
      { name: "USB Hub" },
      { name: "Laptop Stand" },
      { name: "Mousepad Gaming" },
      { name: "External SSD" },
    ],
  },
  "cctv-surveillance": {
    title: "CCTV & Surveillance",
    description: "Sistem keamanan dan pengawasan untuk rumah dan bisnis",
    backgroundImage: "https://img.freepik.com/premium-photo/tech-installs-cctv-camera-security-purposes-concept-security-systems-cctv-installation-tech-services-surveillance-cameras_864588-234963.jpg",
    products: [
      {
        name: "Hikvision DS-2CD1021G0-IU",
        description: "Kamera CCTV IP bullet 2MP Full HD dengan mikrofon bawaan, infrared night vision, dan dukungan PoE. Cocok untuk pengawasan indoor maupun outdoor karena tahan cuaca.",
        image: "https://i.ibb.co/cSBQf0XF/LN3640.jpg",
      },
      {
        name: "DS-2CD1121G0-I",
        description: "Kamera 2 MP IP Dome dengan night vision IR, tahan cuaca IP67, dan dukungan PoE — ideal untuk CCTV rumah/office yang simpel dan efektif.",
        image: "https://i.ibb.co/Wppzj0NQ/LN3641.jpg",
      },
      {
        name: "DS-2CD1121G2-LIU",
        description: "Kamera CCTV IP dome 2MP Full HD dengan mic bawaan, Smart Hybrid Light, deteksi manusia/kendaraan, PoE, dan tahan cuaca.",
        image: "https://i.ibb.co/21qwWf9c/IMG-20260105-133858.jpg",
      },
      {
        name: "DS-2DE3A400BW-DE",
        description: "Kamera PTZ IP dengan zoom 40× untuk pengawasan jauh, Full HD, night vision, PoE, dan tahan cuaca — ideal untuk area luas dan pemantauan detail.",
        image: "https://i.ibb.co/mp5gtLb/hikvision-colorvu-ds-2de3a400bw-de-4mp-outdoor-1605410.jpg",
      },
      {
        name: "DS-2CD2T66G2H-IS2U/SL",
        description: "Kamera CCTV IP turret 6 MP dengan mic & speaker, night vision warna, PoE, dan tahan cuaca — cocok untuk pengawasan detail di rumah/usaha.",
        image: "https://i.ibb.co/cXt4HG9b/DS-2-CD2-T46-G2-ISUSL-C-45-thumb-1280-1280-1.jpg",
      },
      {
        name: "DS-7608NXI-K1/8P",
        description: "NVR 8-channel dengan 8 port PoE built-in untuk koneksi mudah kamera IP, mendukung rekaman berkualitas tinggi dan manajemen pengawasan terpusat.",
        image: "https://i.ibb.co/tT2nd3sS/ds-7608nxi-k1-alarm4-1-d.jpg",
      },
      {
        name: "DS-7732NI-M4",
        description: "NVR 32-channel untuk mengelola banyak kamera IP sekaligus, mendukung rekaman resolusi tinggi dan pengawasan stabil.",
        image: "https://i.ibb.co/spgRv3rN/P1-png-thumb-1280-1280.png",
      },
      {
        name: "DS-7616NI-M2",
        description: "NVR 16-channel untuk merekam dan mengelola banyak kamera IP secara andal, cocok untuk sistem CCTV rumah/usaha.",
        image: "https://i.ibb.co/GfGrR5Zx/MB-203-Y-P-HIKVISION.jpg",
      },
      {
        name: "EZVIZ EB8 4G 4K SOLAR PANEL",
        description: "Kamera 4K 4G nirkabel dengan panel surya terintegrasi, ideal untuk pengawasan tanpa kabel di area luar — hasil jernih, koneksi 4G, dan daya berkelanjutan dari sinar matahari.",
        image: "https://i.ibb.co/sv16jb9Y/61-Ejw8c-HJSL.jpg",
      },
      {
        name: "DS-2CD1127G2H-LIUF",
        description: "Kamera IP dome 2 MP dengan mic & speaker, night vision warna, deteksi pintar, PoE, dan tahan cuaca — cocok untuk pengawasan rumah atau usaha.",
        image: "https://i.ibb.co/WvLsGYqR/DS-2-CD1127-G2-H-LIU.jpg",
      },
    ],
  },
  "network-firewall": {
    title: "Network & Firewall",
    description: "Router, access point, firewall, dan perangkat jaringan lengkap",
    backgroundImage: "https://completeoffice.co.za/cdn/shop/articles/COS_Website_Blog_Banner_Reyee_Ruijie.png?v=1726557955&width=1000",
    products: [
      {
        name: "Ruijie RG-WALL 1600-Z3200-S Next-Generation Z Series Firewall",
        description: "Ruijie RG-WALL 1600-Z3200-S Next-Generation Z Series Firewall adalah perangkat firewall generasi terbaru yang dirancang untuk memberikan keamanan jaringan tingkat enterprise pada lingkungan bisnis, kampus, dan data center. Firewall ini mendukung proteksi terpadu seperti IPS, antivirus, application control, dan threat intelligence, serta mampu menangani trafik besar dengan performa tinggi dan latensi rendah.",
        image: "https://teamon.com.tr/assets/urunler/rg-wall-1600-z3200-s-bm-12925-43fd01fdcdfd616e0db0c468ff7ee50c03013a4a1041d8b630ce60480f23a92b.jpg",
      },
      {
        name: "RB450Gx4 MIKROTIK Router Indoor",
        description: "RB450Gx4 MikroTik Router Indoor adalah router berperforma tinggi yang dirancang untuk kebutuhan jaringan kantor, ISP kecil, dan bisnis menengah. Ditenagai prosesor quad-core ARM Cortex-A15, router ini mampu menangani trafik besar, routing kompleks, firewall, dan VPN dengan stabil. Dilengkapi 5 port Gigabit Ethernet.",
        image: "https://down-id.img.susercontent.com/file/sg-11134201-82592-mftnds2bw2kv51.webp",
      },
      {
        name: "RG-EW3000GX REYEE Dual-band Wi-Fi 6 3000M",
        description: "RG-EW3000GX Reyee Dual-band Wi-Fi 6 3000M adalah router nirkabel berperforma tinggi yang dirancang untuk menghadirkan koneksi internet cepat, stabil, dan efisien di rumah maupun kantor kecil. Mengusung teknologi Wi-Fi 6 (802.11ax) dengan kecepatan hingga 3000 Mbps, router ini mampu menangani banyak perangkat secara bersamaan dengan latensi rendah.",
        image: "https://mikrotik.co.id/images/produk/1267/besar2.jpg",
      },
      {
        name: "Routerboard CRS326-24S+2Q+RM",
        description: "Routerboard CRS326-24S+2Q+RM adalah perangkat cloud router switch kelas enterprise yang dirancang untuk kebutuhan jaringan backbone, data center, dan infrastruktur berkecepatan tinggi. Perangkat ini dilengkapi 24 port SFP+ 10Gbps dan 2 port QSFP+ 40Gbps memungkinkan konektivitas fiber berkapasitas besar.",
        image: "https://citraweb.com/images/produk/631/besar2.jpg",
      },
      {
        name: "RG-EG105G-V3 REYEE Cloud Managed Router",
        description: "RG-EG105G-V3 Reyee Cloud Managed Router adalah router kelas bisnis yang dirancang untuk kebutuhan kantor kecil, toko, dan jaringan cabang dengan pengelolaan yang mudah dan efisien. Router ini dilengkapi 5 port Gigabit Ethernet, fitur load balancing multi-WAN, firewall, dan VPN.",
        image: "https://mikrotik.co.id/images/produk/1200/besar2.jpg",
      },
      {
        name: "Firewall Fortinet Fortigate 100f",
        description: "Fortinet FortiGate 100F adalah next-generation firewall (NGFW) kelas enterprise yang dirancang untuk melindungi jaringan kantor pusat, cabang, dan data center dari ancaman siber modern. Perangkat ini menawarkan performa tinggi untuk firewall, IPS, antivirus, web filtering, dan application control.",
        image: "https://www.qfirewall.id/wp-content/uploads/2024/07/19.jpeg",
      },
      {
        name: "Firewall Fortinet Fortigate 40f",
        description: "Fortinet FortiGate 40F adalah next-generation firewall (NGFW) yang dirancang khusus untuk kantor kecil, cabang, dan bisnis menengah yang membutuhkan keamanan jaringan handal dengan performa tinggi. Ditenagai FortiOS dan akselerasi hardware Fortinet.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4diNLL2suuggZtNxbUtiirVsOXtnoTFse2A&s",
      },
      {
        name: "Access Point Ruijie RG-RAP2200-E",
        description: "Access Point Ruijie RG-RAP2200-E adalah perangkat Wi-Fi dual-band berperforma tinggi yang dirancang untuk kebutuhan kantor, sekolah, hotel, dan area publik. Access point ini mendukung koneksi stabil dan luas dengan manajemen terpusat Ruijie.",
        image: "https://laz-img-sg.alicdn.com/other/lzd-client-service/535dfe2985bb55638da4846da1dc601a.jpeg",
      },
      {
        name: "Access Point Ruijie RG-AP730-L Indoor",
        description: "Access Point Ruijie RG-AP730-L Indoor adalah access point Wi-Fi 6 (802.11ax) berperforma tinggi yang dirancang untuk kebutuhan jaringan indoor berkapasitas besar seperti kantor, kampus, hotel, dan area publik. Perangkat ini mampu menangani banyak pengguna secara simultan.",
        image: "https://down-id.img.susercontent.com/file/de4b143677473b5bc234b3912e9a2b41.webp",
      },
      {
        name: "Access Point Ubiquity Unifi AP AC PRO UAP-AC-PRO",
        description: "Access Point Ubiquiti UniFi AP AC PRO (UAP-AC-PRO) adalah access point dual-band Wi-Fi kelas profesional yang dirancang untuk lingkungan kantor, kampus, hotel, dan area publik dengan kebutuhan koneksi stabil dan luas. Perangkat ini mendukung standar 802.11ac.",
        image: "https://down-id.img.susercontent.com/file/id-11134207-7r98r-llljl3kldenlb2.webp",
      },
      {
        name: "Access Point Outdoor Ruijie Reyee RG-RAP52-OD",
        description: "Access Point Outdoor Ruijie Reyee RG-RAP52-OD adalah access point outdoor dual-band Wi-Fi 5 (802.11ac) yang dirancang untuk menyediakan koneksi nirkabel stabil dan luas di area luar ruangan seperti halaman, area parkir, sekolah, dan lingkungan industri ringan.",
        image: "https://m.media-amazon.com/images/I/41k7r0P+VRL._AC_UF350,350_QL80_.jpg",
      },
      {
        name: "Ubiquiti Unifi AP AC PRO UAP-AC-PRO",
        description: "Ubiquiti UniFi AP AC PRO (UAP-AC-PRO) adalah access point dual-band Wi-Fi kelas profesional yang dirancang untuk lingkungan kantor, kampus, hotel, dan area publik dengan kebutuhan koneksi stabil dan cakupan luas. Mendukung standar 802.11ac dengan performa tinggi.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRlvInYBNJj6mIV8b53EJU78CRNojslEmecw&s",
      },
    ],
  },
  "printer-scanner": {
    title: "Printer & Scanner",
    description: "Solusi cetak dan scan untuk kebutuhan kantor dan rumah",
    backgroundImage: "https://iprsoftwaremedia.com/108/files/20214/60909ba5b3aed365d13a686e_Banner%20MNR%20ET%20Photo_ET%20Pro/Banner%20MNR%20ET%20Photo_ET%20Pro_60e877d3-c51b-4909-b57a-d60e2f902159-prv.png",
    products: [
      {
        name: "Epson L3211",
        description: "Printer Epson L3211 memiliki keunggulan utama pada sistem EcoTank yang membuat biaya cetak sangat hemat, dilengkapi fungsi print, scan, dan copy, serta kualitas cetak dokumen dan foto yang cukup tajam untuk kebutuhan sehari-hari.",
        image: "https://www.drivers-epson.com/wp-content/images/epson/Epson-L3211-printer.webp",
      },
      {
        name: "Canon PIXMA E470",
        description: "Printer Canon PIXMA E470 memiliki keunggulan pada fitur Wi-Fi yang memungkinkan cetak, scan, dan copy langsung dari laptop maupun ponsel tanpa kabel, sehingga praktis untuk penggunaan rumahan.",
        image: "https://els.id/wp-content/uploads/2024/12/Canon-E470.png",
      },
      {
        name: "Epson WorkForce WF-100",
        description: "Printer Epson WorkForce WF-100 memiliki keunggulan utama pada desainnya yang portabel, ringan, dan mudah dibawa, dilengkapi baterai internal sehingga bisa digunakan tanpa listrik langsung. Printer ini sudah mendukung Wi-Fi dan Wi-Fi Direct.",
        image: "https://www.epson.co.id/Support/Printers/Printer-inkjet/WorkForce-Series/Epson-WorkForce-WF-100/s/SPT_C11CE05502",
      },
      {
        name: "Epson WorkForce Pro WF-C5390",
        description: "Printer Epson WorkForce Pro WF-C5390 memiliki keunggulan pada kecepatan cetak yang tinggi dan stabil berkat teknologi PrecisionCore, sehingga sangat cocok untuk kebutuhan kantor dan bisnis.",
        image: "https://mediaserver.goepson.com/ImConvServlet/imconv/d69ee74e4038dee67ca5cf23d5f5bff93002dd3e/515Wx515H?use=productpictures&hybrisId=B2C&assetDescr=WF-5390-%281%29-min",
      },
      {
        name: "HP DeskJet",
        description: "Printer HP DeskJet unggul karena desainnya yang kompak dan harga relatif terjangkau, serta dukungan konektivitas Wi-Fi dan USB yang memudahkan cetak dari laptop atau smartphone melalui aplikasi HP Smart.",
        image: "https://www.hp.com/id-id/shop/hp-deskjet-ink-advantage-4275-all-in-one-printer-588k0b.html",
      },
      {
        name: "HP Color 10050A",
        description: "Printer HP Color 10050A umumnya unggul dalam menghasilkan hasil cetak warna yang tajam dan teks yang jelas berkat teknologi laser, yang lebih konsisten dan tahan lama dibandingkan tinta biasa.",
        image: "https://uniquec.com/wp-content/uploads/1005.png",
      },
      {
        name: "HP LaserJet Pro 107W",
        description: "Printer HP LaserJet Pro 107W memiliki keunggulan pada kecepatan cetak yang cukup tinggi dan hasil teks hitam-putih yang tajam, sehingga cocok untuk mencetak dokumen kerja atau tugas sekolah. Printer ini juga sudah mendukung Wi-Fi.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Zc30zHh-_w8GpyS_BJkKsnlEToujvH1qEw&s",
      },
      {
        name: "Brother Inkjet MFC-J3540DW",
        description: "Printer Brother Inkjet MFC-J3540DW unggul karena memiliki fitur lengkap seperti print, scan, copy, fax, cetak dua sisi otomatis (duplex), koneksi Wi-Fi, serta kemampuan mencetak hingga ukuran A3.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKE3u70ZMFPoNxqT3OGqx8nJJtxfIxl8An6Q&s",
      },
      {
        name: "Brother DCP-T402W",
        description: "Printer Brother DCP-T402W memiliki keunggulan pada sistem tangki tinta isi ulang yang membuat biaya cetak sangat hemat, serta fungsi print, scan, dan copy yang lengkap untuk kebutuhan rumahan atau usaha kecil.",
        image: "https://www.brother.co.id/-/media/ap2/products/printer/dcp-t420w/dcp-t420w-l.jpg?rev=b00e90217752404b94ef08e3799134f8",
      },
      {
        name: "Epson WorkForce DS-410",
        description: "Epson WorkForce DS-410 unggul karena kecepatan scan tinggi, sudah mendukung scan dua sisi otomatis (duplex) dan ADF hingga 50 lembar, sehingga cocok untuk kebutuhan kantor dengan volume dokumen besar.",
        image: "https://mediaserver.goepson.com/ImConvServlet/imconv/2562ef08669a6a39ebc4ee88bda92261ffeb022f/1200Wx1200H?use=banner&hybrisId=B2C&assetDescr=DS-410_S03_paper",
      },
      {
        name: "Epson ES-50",
        description: "Printer Epson ES-50 adalah scanner portable yang ringkas dan mudah dibawa, sehingga cocok untuk memindai dokumen saat bepergian atau di luar kantor. Keunggulannya termasuk desain sangat ringan, plug-and-play lewat USB.",
        image: "https://mediaserver.goepson.com/ImConvServlet/imconv/9a7ab2bd133a53d73c8e47352056ddc88bb97995/1200Wx1200H?use=banner&hybrisId=B2C&assetDescr=ES-50_02_A4-1",
      },
      {
        name: "Epson Perfection V39",
        description: "Scanner Epson Perfection V39 unggul karena resolusi scan tinggi, desain ringkas dan ringan, serta mudah digunakan melalui koneksi USB tanpa adaptor tambahan, sehingga cocok untuk memindai dokumen dan foto dengan kualitas baik.",
        image: "https://mediaserver.goepson.com/ImConvServlet/imconv/b90786d670b246159f8e5ffbb797ad94ee30c6f0/1200Wx1200H?use=banner&hybrisId=B2C&assetDescr=V39II-%282%29",
      },
      {
        name: "Brother ADS-3100",
        description: "Scanner Brother ADS-3100 unggul karena kecepatan scan sangat tinggi, sudah mendukung scan dua sisi otomatis (duplex) dan ADF besar, sehingga sangat cocok untuk kebutuhan kantor dengan volume dokumen banyak.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvEEwGwsrZ8Q7_cFoSzODhd4XK4qsv2qPlJg&s",
      },
      {
        name: "Brother ADS-3150W",
        description: "Scanner Brother ADS-3150W unggul karena kecepatan scan tinggi, sudah mendukung scan dua sisi otomatis (duplex), ADF, dan konektivitas Wi-Fi, sehingga cocok untuk kebutuhan kantor dengan volume dokumen besar.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToYym9a8toGk5-n0y3uNDNRaZ-oaz0m2OvvA&s",
      },
    ],
  },
};

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = slug ? categoryData[slug] : null;

  if (!category) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex flex-1 items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground">Kategori tidak ditemukan</h1>
            <Link to="/" className="mt-4 inline-flex items-center text-primary hover:underline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Kembali ke Beranda
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Helmet>
        <title>{category.title} - Indo Komputer Tegal</title>
        <meta name="description" content={category.description} />
      </Helmet>

      <Header />

      <main className="flex-1">
        {/* Hero with Background Image */}
        <section 
          className="relative py-12 md:py-16"
          style={{
            backgroundImage: `url(${category.backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-primary/80" />
          <div className="container relative z-10">
            <Link
              to="/"
              className="mb-4 inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Kembali ke Beranda
            </Link>
            <h1 className="font-heading text-3xl font-bold text-primary-foreground md:text-4xl">
              {category.title}
            </h1>
            <p className="mt-2 max-w-2xl text-primary-foreground/90">{category.description}</p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {category.products.map((product, index) => (
                <div
                  key={index}
                  className="group flex flex-col rounded-xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-elevated"
                >
                  <div className="flex h-48 items-center justify-center overflow-hidden rounded-t-xl bg-muted p-4">
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                    ) : (
                      <span className="text-5xl text-muted-foreground/50">📦</span>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-heading text-lg font-semibold text-foreground">{product.name}</h3>
                    {product.description ? (
                      <p className="mt-2 line-clamp-3 flex-1 text-sm text-muted-foreground">{product.description}</p>
                    ) : (
                      <p className="mt-1 flex-1 text-sm text-muted-foreground">Hubungi untuk harga terbaik</p>
                    )}
                    <a
                      href={`https://wa.me/6287782524000?text=Halo, saya tertarik dengan ${product.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                    >
                      <Phone className="h-4 w-4" />
                      Tanya Harga
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-muted py-12">
          <div className="container text-center">
            <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
              Butuh Bantuan?
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-muted-foreground">
              Tim kami siap membantu Anda menemukan produk yang tepat
            </p>
            <a
              href="https://wa.me/6287782524000"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground shadow-glow transition-all hover:shadow-glow-lg"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Hubungi via WhatsApp
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default CategoryPage;
