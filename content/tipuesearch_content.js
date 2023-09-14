var tipuesearch = {"pages": [{'title': 'About', 'text': 'https://mde.tw/cpnote \n 這是國立虎尾科技大學機械設計工程系大一計算機程式課堂筆記網站。 \n 課程內容將從基本的 C 程式語言練習起，主要目的是讓學員了解編譯程式語言的特性及基本用法。 \n C 程式語言範例，包括如何利用數值分析流程，解出 mass-spring-damper 系統運動程式，並將質量的運動位移及速度，以 Gnuplot 圖表列出。 \n 接著將數值分析運算移至瀏覽器時，要求學員試著將 C 程式改寫為 Javascript， 並加上 plotly.js 進行繪圖。 \n 之後在 plotly.js 的運算繪架構下，嘗試利用 Brython 取代 Javascript。 \n 最後，希望透過一組包含網路前後端的 Python 語法程式範例，說明計算機程式語言在現階段機電資整合設計中的相關應用。 \n 下載可攜程式套件: \n basic_portable_python.7z  (下載 15MB, 解開後 55MB) \n 下載  Portable_2023_fall_1.3g_5g.7z  (需要下載密碼) \n 也可以直接使用電腦輔助設計室中 C:\\Portable_2023_fall 目錄中的檔案 \n', 'tags': '', 'url': 'About.html'}, {'title': '上課內容', 'text': '112 學年度第一學期 (2023 Fall) 機械設計工程系 - 計算機程式課程的上課內容與進度. \n 手機建議安裝以下 Apps: \n ChatGPT, Github mobile, Replit, Authy, Teams, Onshape \n 說明 Win 11 網路設定: \n 由於電腦輔助設計室可以透過單一網卡, 啟動 IPv4 網路與 IPv6 網路連線, 除了利用 Win11 設定編輯相關網路內容外, 也可以在命令搜尋區輸入 Control Panel (或控制台), 帶出控制台, 從"控制台\\網路和網際網路\\網路和共用中心\\變更介面卡設定"中的乙太網路進行設定. \n 電腦中的網路設定內容除了透過 GUI 介面查詢外, 也可以在命令搜尋區輸入 cmd (command 命令提示字元), 後利用 ipconfig /all 指令取得目前的網路設定. \n IP - Internet Protocol (網際網路協定) \n IP address (網路位址, 機械設計工程系主幹網路 IPv4 網路位址區段 140.130.17.xxx, IPv6 網路區段2001:288:6004:17:xxxx:xxxx:xxxx:xxxx) \n 各班學員在電腦輔助設計室至加退選結束之前的 暫時座位表  ( 如何利用程式即時在網頁中列出各班座位表, 並納入後續延伸應用, 是一個不錯的探討主題 ), 因為目前 Win11 電腦只有 52 台, 因此學員若自帶筆記型電腦, 則可以讓出固定式電腦, 或者選擇多人 (2-3人) 共用一台電腦 (備註: 學校不是沒有經費添購教學電腦, 而是希望讓學員提早進入共享電腦時代, 並體會如何在協同模式下進行創新產品開發:-) \n 首先說明 課程評分方式 \n Teaching Methods (教學方法): \n \n lectures (講課) \n instruction (導引) \n projects (專案) \n self-study (自學) \n \n 第一階段任務: \n 完成本節中的各項任務後, 表示你將可以登入: \n \n 學校 email 帳號郵箱 \n 個人Gmail 帳號郵箱 \n Replit IDE 系統 (以 個人Gmail 帳號登入) \n 個人 Github 系統 \n 以學校 email 帳號設定的 Onedrive 系統 \n \n 登入學校 Email 郵箱: \n 學校 Webmail:  https://mail.nfu.edu.tw  (帳號為: 學號@nfu.edu.tw, 用來通知  http://s1511.cycu.org \xa0 主機上的帳號密碼與學期成績) \n 申請或登入 Gmail: \n 假如尚未擁有 Gmail 帳號, 請自行 申請一個 Gmail 帳號 , 可用來 登入 Replit  線上 IDE 系統. \n 申請 Github 帳號: \n 請利用"學號@nfu.edu.tw"在 Github  註冊 一個帳號, 帳號名稱可以選擇 學號 , 或者用 英文姓名的三個字母縮寫加上學號 作為 Github 帳號. 帳號建立後必須進入  https://mail.nfu.edu.tw  回覆確認信件後, 才能開始使用 Github. \n 由於 Github 要求所有用戶在 2023 年底之前要使用 2FA 認證方式登入, 使用者可以在手機中先安裝 Github Mobile App, 假如只希望利用手機取得 2FA token (六個阿拉伯數字) 則可以在手機中安裝 Google Authenticator App, 若也希望利用 Apple Watch 取得 2FA token, 則可以在手機中安裝 Authy App. \n 將 Github 帳號登入所需的 2FA 認證設定於手機的 Google Authenticator 或 Authy 的流程為: \n 1. 登入 Github 後, 進入帳號 Settings - Password and authentication - Two-factor authentication 下, 若此時手機已經安裝 Github Mobile App, 且以 Github 帳號登入, 則 Preferred 2FA methods 選項中將會顯示 Github Mobile, 表示此時啟動 2FA 認證流程, 則使用者登入 Github 時, 除了必須輸入帳號密碼外, 還需要在手機的 Github Mobile App 中確認同意該使用者登入 Github, 系統才會允許登入. \n 2. 接下來, 在 Two-factor methods 下點選 Authenticator app 右方的 Add (若要變更手機所使用的 2FA token 產生程式, 則點選 Edit), 視窗中將會出現一組二維條碼, 使用者可以利用手機開啟 Google Authenticator 或 Authy 中的 account add 功能開啟相機拍二維條碼後, 將 Github 帳號登錄至手機認證套件中. \n 3. 一旦上述 Github 帳號在手機中的 2FA 認證設定完成, 使用者可以將前述內建為 Github Mobile 的 Preferred 2FA methods 改為 Authenticator app, 之後再登入 Github, 除了必須輸入對應的帳號密碼之外, 還需要輸入在特定時段內輸入手機或手錶中對應帳號所顯示的六個數字 (即 2FA token), 才能登入 Github. \n 4. 至於手機中的 Authenticator 也可以再利用 Pin 密碼、指紋或人臉辨識流程加入安全保護, 一旦手機或手錶毀損, 就可以藉以登入 Github 帳號修改設定. \n Github 帳號在計算機程式課程中的用途: \n \n 領取  Github Classroom  系統所指定的作業 \n 建立個人網站:  https://github_帳號.github.io \n 將計算機程式課程中所編寫的程式與相關資料存入 Github 帳號下的 Gist \n \n 在 Github 中, 若需要將所建立的倉儲以 Github Pages 功能轉為網站, 可以在建立倉儲時, 以  https://github.com/mdecycu/cmsite  作為 template, 首先學習如何利用 Replit 維護網站內容, 隨後則可利用 s1511 伺服器中的帳號進行 Github 倉儲與網站內容的維護, 最後也可以在近端可攜程式環境中維護 Github 倉儲與網站內容. \n 利用 Github 建立個人網站 (透過  Github Pages ) 有以下目標: \n \n 可在網站中自我介紹 ( https://www.betterup.com/blog/how-to-introduce-yourself ) \n 可在網站中展示並介紹自己寫過的程式 \n 可在網站中簡介自己修過的課程內容 \n 可在網站中說明自己曾經參與過的專題 \n 可在網站中介紹自己未來的生涯規劃 \n \n 申請 onedrive 帳號: \n \n 登入學校郵箱 (用來收帳號建立確認信) \n 至  https://www.microsoft.com/zh-tw/education/products/office , 以 學號@nfu.edu.tw 帳號申請 OneDrive 帳號. \n \n onedrive 帳號在計算機程式課程中的用途: \n \n 擁有線上 5TB 的儲存空間, 可用來儲存個人所建立的流程操作 mp4 影片, 並嵌入個人網頁或作業網站中 \n 擁有線上 5TB 的儲存空間, 可用來儲存與課程相關的 教育版授權軟體  (例如:  Windows 10 64位元 22H2.4 ,  Windows 11 64位元 22H2.6 ,  windows_kms.bat ) 或可攜程式系統檔案與 電子書 \n 登入後可參與計算機程式課程 Teams (2023 計算機程式 MS Teams 代碼為: plmm43c) \n 登入後可下載計算機程式課程網站中的相關檔案 (下載連結將公布在 Teams) \n \n \n Replit 的應用: \n 當使用者利用 Gmail 帳號登入 Replit 之後, 可以選擇以 C 作為 Template, 就可以直接利用瀏覽器執行 ANSI C 程式 (也可以選擇 C++, Javascript, Python 或其他程式語言 Template 執行該程式內容, 惟在免費 Replit 帳號下, 並不開放讓使用者透過 80 與 443 以外的 Ports, 因此無法在虛實整合機電控制流程中充當 Server). \n C 程式語言是 1970 年代創建 Unix 操作系統時所發明, 而 C++ 則是在 1980 年代在 C 的基礎上加上物件導向相關的語法以及相關程式庫, 一般將 C++ 視為帶有 Class 的 C. \n C++ = C with Class (物件導向式的 C) \n Replit 則是一套可讓用戶直接在瀏覽器中協同開發各種程式套件的 IDE. \n Replit = Web-based IDE (Integrated Development Environment, 整合開發環境) \n 以下將練習如何在 Replit 以及近端編譯執行一個簡單的 C 程式: \n 可以在 Replit 與近端\xa0C:\\Portable_2023_fall (必須在檢視-顯示項目下勾選"副檔名"與"隱藏的項目") \n 雙點擊\xa0 C:\\Portable_2023_fall\\start_ipv6.bat 後, 可以在近端啟動可攜程式環境, 其中已經設定透過 Tiny C Compiler 編譯執行副檔名為 .c 的程式, 使用者可以利用 SciTE 編輯器中的 Tools - Go 功能表執行 ANSI C 程式: \n #include <stdio.h>\n\nint main(void) {\n  printf("Hello World中文\\n");\n  return 0;\n} \n 與 ChatGPT 對話範例: \n \n 目前的 C 程式如下"#include <stdio.h> int main(void) { \xa0 printf("Hello World中文\\n"); \xa0 return 0; }", 請利用重複迴圈列印出 10 行相同字串 \n 請使用繁體中文重新說明一遍 \n 請逐行詳細說明程式用法 \n 何謂 stdio.h, 為什麼要 include <stdio.h>? \n int 代表甚麼? \n 為什麼每一行一定要有";" \n main(void) 代表甚麼? \n 編譯與解譯有何不同? \n \n Exercises: \n 請從  https://www.w3resource.com/c-programming-exercises/  網頁中自選 10 個練習範例, 分別在 Replit, Windows 與 Linux (or macOS) 中執行後, 取下執行畫面放入個人的 Github Pages 網頁 (即帳號.github.io 網站), 以 ANSIC 作為頁面標題並詳細說明每一行的程式語法. \n 延伸參考: \n https://codeforwin.org/c-programming-examples-exercises-solutions-beginners \n https://techstudy.org/clanguage/c-programming-examples \n https://www.w3schools.com/c/c_exercises.php \n https://pythonistaplanet.com/c-programming-exercises/ \n 進階自學內容: \n 由 C++ 發明人所寫的  A history of C++: 1979-1991 \n C++ 編譯器進展 \n Introduction to C++  (pdf files) (需要下載密碼) \n 2013  Moving from C to C++  (在校園網路或經由 VPN 下載) \n 2014  Advanced C and C++ Compilin g (在校園網路或經由 VPN 下載) \n 2017\xa0 Guide to Scientific Computing in C++  (在校園網路或經由 VPN 下載) \n 2023  Modern C++ for Absolute Beginners  (在校園網路或經由 VPN 下載) \n msys2_and_cmake.7z  (需要下載密碼) \n 設法利用 Msys2 編譯 SciTE, Solvespace 與 CoppeliaSim', 'tags': '', 'url': '上課內容.html'}, {'title': '課程評分', 'text': '課程評分: \n 線上測驗、期中網站與簡報、期末網站與簡報. \n 線上測驗: \n 建立帳號後 ( 請將密碼寫入手機的備忘錄 ), 每週不定時進行. \n 期中網站評分與簡報: \n 期中考前兩週開始進行. \n 期末網站評分與簡報: \n 期末考前兩週開始進行. \n 期中成績計算: \n 期中考與之前各週線上測驗成績平均 \n 學期成績計算: \n (期中成績與之後各週線上測驗成績平均)*60%+(期中網站與簡報成績)*20%+(期末網站與簡報成績)*20% \n', 'tags': '', 'url': '課程評分.html'}, {'title': '課程主題', 'text': '\n 認識數位環境與資源 \n 工程師的計算機程式能力 \n 開發程式工具 (解決特定問題) \n 課程總結 \n \n', 'tags': '', 'url': '課程主題.html'}, {'title': '數位環境與資源', 'text': '1. 認識數位環境與資源 \n 企業所提供的數位資源: \n ChatGPT  (Google Bard and Perplexity AI) \n AutoDesk  (Dassault Solidworks and CATIA) \n Siemens Solid Edge  (NX) \n Engineering Student Softwares \n PTC Creo \n Onshape for Education \n Ansys  (Comsol and SIMULIA Abaqus) \n Office 365 for Education \n Github \n Github Classroom \n Replit \n RoboDK \n CoppeliaSim \n Webots \n 學校所提供的數位資源 \n 軟體  ( 使用校園網路或 VPN 下載) \n Windows 10 64位元 22H2.4 \n Windows 11 64位元 22H2.6 \n windows_kms.bat \n Office 2019 64位元 \n office_2019_kms.bat \n Office 2016 64位元 \n office_2016_kms.bat \n Visual Studio Pro 2015 英文版 \n MATLAB for Windows 2023a 64位元 \n Introduction to MATLAB for Engineers and Scientists \n Introduction to Partial Differential Equations with MATLAB \n MATLAB for Linux 2022a 64位元 \n MATLAB 安裝說明 \n MATLAB Guideline \n 電子資源 \n 數位學習網:\xa0 https://www.nfu.edu.tw/zh/elearning \xa0 \n eBooks and Journals:  https://link.springer.com \xa0 \n Introducing eBooks \n 綜合工程第一館網路配置 \n 機械設計工程系 \n IPv4 網段 (140.130.17.0/24) \n Gateway: 140.130.17.254 \n DNS: 140.130.17.3 \n IPv6 網段 (2001:288:6004:17::/32) \n Gateway: 2001:288:6004:17::254 \n DNS: 2001:288:6004:17::3 \n 有線網路 \n 無線網路 \n 綜一館電腦資源 \n 可借用電腦教室 \n 磁區設定與所安裝軟體 \n 工作站中的伺服器 \n https://s1511.cycu.org \xa0 \n Introducing UNIX and Linux \n 電腦輔助設計室 \n 兩種不同規格的電腦 \n 協同產品設計室 \n 虛實手足球系統 \n Arduino \n CoppeliaSim \n RoboDK \n 手足球檯 \n Rasperry Pi \n Webcam', 'tags': '', 'url': '數位環境與資源.html'}, {'title': '上課系統', 'text': 'ChatGPT  (從  https://chat.openai.com/auth/login  以 Gmail 帳號登入, 也可在手機安裝 ChatGPT App) \n Office 365 for Education \n Github \n Github Classroom \n Replit \n Welcome to Replit \n 進階自學系統 \n CoppeliaSim \n 2023.03 最新版本為 4.5.1 \n 4.4.0 則發布於 2022.09 \n ZeroMQ Remote API for CoppeliaSim \n WebSocket plugin for CoppeliaSim \n three.js Frontend \n RoboDK \n 2023.07 最新的版本為 \xa0 Download 5.6.2 \n Download 5.2.2 \xa0 則發布於 2021.03.22 \n RoboDK 源自 \xa0 https://www.parallemic.org/RoKiSim.html \n 在計算機程式課程中, 我們可以利用 RoboDK 中的 Robot 控制來練習 Python 各種語法的應用, 其中也將牽涉一些線性代數 (Linear Algebra, \xa0 1 , \xa0 2 ) 與幾何 (Geometry, \xa0 1 , \xa0 2 , \xa0 3 ) 的應用.', 'tags': '', 'url': '上課系統.html'}, {'title': '程式能力', 'text': '2. 工程師的計算機程式能力 \n C, Javascript, Brython, Python \n Windows 64 位元操作系統下的工具: \n basic_portable_python.7z  (下載 15MB, 解開後 55MB) \n 下載  Portable_2023_fall_1.3g_5g.7z  (需要下載密碼) \n Github Classroom 作業倉儲: \n 從 github classroom 取得個人課程倉儲 \n 將以\xa0 https://github.com/mdecycu/cmsite \xa0作為個人作業起始 template \n 以下為簡單的線上 Python 程式執行區: \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n \n', 'tags': '', 'url': '程式能力.html'}, {'title': '程式語言', 'text': '機械設計工程師在甚麼情況下需要使用 C 解決問題? \n 機械設計工程師在甚麼情況下需要使用 Javascript 解決問題? \n Brython 程式語言一般被用在那些情況下? \n 機械設計工程師在甚麼情況下需要使用 Python 解決問題? \n', 'tags': '', 'url': '程式語言.html'}, {'title': 'ANSI C', 'text': 'jsliu_c_programming.pdf  (需要下載密碼) \n 2015 Learn to Program with C  (經由校園網路或 VPN 下載) \n 2020 Computer Programming in C for Begineers  (經由校園網路或 VPN 下載) \n \n ANSI C 程式語言所謂具有可攜性, 是甚麼意思? \n ANSI C 被定位為低階程式語言, 是甚麼意思? \n 可以用 ANSIＣ加上Gnuplot 繪圖, 解一個質量與兩個並聯的彈簧與阻尼器連接到牆上, 且起始條件為執行被往後拉 0.2 m 後放開的常微分方程式, 並劃出該質量被釋放之後 10 秒之內的位移以及速度圖嗎? \n 請詳細解釋所謂的 Euler\'s Method, 並且能不能將 Gnuplot 繪圖指令直接與 C 程式合併, 執行程式後直接產生位移與速度 png 圖? \n 能不能將 gnuplot 繪圖程式碼與 Euler\'s Method 解微分方程式的程式碼結合在一起, 執行時直接就能繪出質量的位移與速度圖, 而且請在繪圖時直接使用位於 Y:\\ 的 wqy-microhei.ttc 中文字形, 否則無法在圖面上顯示出正確的中文. \n 請將質量的位移以及速度繪製在同一個 png 圖檔上 \n \n 利用 Euler\'s Method 解 mass-spring-damper 系統的運動方程式, 並採 ANSI C 與 Gnuplot 執行運算及繪圖. \n euler_mass_spring_damper_gnuplot.7z \n #include <stdio.h>\n\nint main() {\n    // 開啟文件以寫入位移和速度數據\n    FILE *outputFile = fopen("motion_data.txt", "w");\n    if (!outputFile) {\n        fprintf(stderr, "無法創建數據文件。\\n");\n        return 1;\n    }\n\n    // 模擬運動 10 秒並計算位移和速度，同時將數據寫入文件\n    double x = 0.2;  // 初始位移\n    double v = 0.0;  // 初始速度\n    double dt = 0.01; // 時間步長\n    double t = 0.0;  // 時間\n\n    while (t <= 10.0) {\n        double acceleration = (-10.0 * x - 0.5 * v) / 1.0; // 這裡修改了系統的參數\n        v += acceleration * dt;\n        x += v * dt;\n\n        fprintf(outputFile, "%lf %lf %lf\\n", t, x, v);\n\n        t += dt;\n    }\n\n    // 關閉數據文件\n    fclose(outputFile);\n\n    // 使用popen啟動Gnuplot進程\n    FILE *gnuplotPipe = popen("gnuplot -persistent", "w");\n    if (!gnuplotPipe) {\n        fprintf(stderr, "無法啟動Gnuplot。\\n");\n        return 1;\n    }\n\n    // 使用Gnuplot繪圖指令，指定字型文件和輸出PNG\n    fprintf(gnuplotPipe, "set terminal pngcairo enhanced font \'Y:/wqy-microhei.ttc,10\' size 800,400\\n");\n    fprintf(gnuplotPipe, "set output \'motion_plot.png\'\\n");\n    fprintf(gnuplotPipe, "set title \'位移和速度 vs. 時間\'\\n");\n    fprintf(gnuplotPipe, "set xlabel \'時間 (s)\'\\n");\n    fprintf(gnuplotPipe, "set ylabel \'位移 (m)\'\\n");\n    fprintf(gnuplotPipe, "plot \'motion_data.txt\' using 1:2 with lines lw 2 title \'位移\', \\\n                             \'motion_data.txt\' using 1:3 with lines lw 2 title \'速度\'\\n");\n\n    // 關閉Gnuplot進程\n    fprintf(gnuplotPipe, "exit\\n");\n    pclose(gnuplotPipe);\n\n    return 0;\n}\n \n 運算結果: \n \n 假如拿掉 Damping: \n \n 假如將 C 改寫為 Javascript, 並且使用 plotly.js 取代 Gnuplot, 可使用下列 html + Javascript 執行運算: \n <!DOCTYPE html>\n<html>\n<head>\n    <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>\n</head>\n<body>\n    <div id="plotDamping"></div>\n    <div id="plotNoDamping"></div>\n\n    <script>\n        // Function to simulate motion using Euler\'s method\n        function simulateMotion(MASS, SPRING_K, DAMPING_C, containerId) {\n            // Define simulation parameters\n            const totalTime = 10.0;\n            const dt = 0.01;\n            \n            // Initialize data arrays\n            const timeData = [];\n            const displacementData = [];\n            const velocityData = [];\n\n            // Initial conditions\n            let t = 0.0;\n            let x = 0.2;\n            let v = 0.0;\n\n            while (t <= totalTime) {\n                timeData.push(t);\n                displacementData.push(x);\n                velocityData.push(v);\n\n                // Calculate acceleration based on parameters\n                const acceleration = (-SPRING_K * x - DAMPING_C * v) / MASS;\n                v += acceleration * dt;\n                x += v * dt;\n\n                t += dt;\n            }\n\n            // Plot the data\n            const displacementTrace = {\n                x: timeData,\n                y: displacementData,\n                mode: \'lines\',\n                name: \'Displacement\'\n            };\n\n            const velocityTrace = {\n                x: timeData,\n                y: velocityData,\n                mode: \'lines\',\n                name: \'Velocity\'\n            };\n\n            const layout = {\n                title: `Displacement and Velocity vs. Time (${containerId === \'plotDamping\' ? \'With Damping\' : \'No Damping\'})`,\n                xaxis: { title: \'Time (s)\' },\n                yaxis: { title: \'Displacement (m) / Velocity\' }\n            };\n\n            const plotData = [displacementTrace, velocityTrace];\n\n            Plotly.newPlot(containerId, plotData, layout);\n        }\n\n        // Simulate motion with damping\n        simulateMotion(1.0, 10.0, 0.5, \'plotDamping\');\n\n        // Simulate motion without damping\n        simulateMotion(1.0, 10.0, 0.0, \'plotNoDamping\');\n    </script>\n</body>\n</html> \n 模擬運算結果為: \n \n \n \n \n \n \n \n \n \n 假如採用 C 以 Runge-Kutta 解 mass-spring-damper 系統運動模擬: \n /* Runge Kutta for a set of first order differential equations */\n// http://mde.tw/cad2020/content/W7.html\n  \n#include <stdio.h>\n#include <math.h>\n  \n#define N 2 /* number of first order equations */\n#define dist 0.01 /* stepsize in t*/\n#define MAX 10.0 /* max for t */\n  \nFILE *output; /* internal filename */\nFILE *output1; /* internal filename */\n// 利用 pipe 呼叫 gnuplot 繪圖\nFILE *pipe;\n  \nvoid runge4(double x, double y[], double step); /* Runge-Kutta function */\ndouble f(double x, double y[], int i); /* function for derivatives */\n  \nvoid main(){\n  \n  double t, y[N];\n  int j;\n  \n  output=fopen("osc.dat", "w"); /* external filename */\n  output1=fopen("osc1.dat", "w"); /* external filename */\n  \n  y[0]=0.2; /* initial position */\n  y[1]=0.0; /* initial velocity */\n  \n  //fprintf(output, "0\\t%f\\n", y[0]);\n  \n  for (j=1; j*dist<=MAX ;j++) /* time loop */{\n  \n    t=j*dist;\n    runge4(t, y, dist);\n    fprintf(output, "%f\\t%f\\n", t, y[0]);\n    fprintf(output1, "%f\\t%f\\n", t, y[1]);\n  }\n  \n  fclose(output);\n  fclose(output1);\n  \n  pipe = popen("gnuplot -persist","w");\n  //fprintf(pipe,"set term png enhanced font \\"v:/fireflysung.ttf\\" 18 \\n");\n  fprintf(pipe,"set term png enhanced font \\"y:/wqy-microhei.ttc\\" 18 \\n");\n  //fprintf(pipe,"set yrange [68:70]\\n");\n  fprintf(pipe,"set output \\"rk_mass_spring_damper.png\\"\\n");\n  fprintf(pipe, "plot \\"osc.dat\\" title \\"位移\\" with lines, \\"osc1.dat\\" title \\"速度\\" with lines\\n");\n  fprintf(pipe,"quit\\n");\n \n  fprintf(pipe,"quit\\n");\n  pclose(pipe);\n}\n  \nvoid runge4(double x, double y[], double step){\n  \n  double h=step/2.0, /* the midpoint */\n  t1[N], t2[N], t3[N], /* temporary storage arrays */\n  k1[N], k2[N], k3[N],k4[N]; /* for Runge-Kutta */\n  int i;\n  \n  for (i=0;i<N;i++){\n  \n    t1[i]=y[i]+0.5*(k1[i]=step*f(x,y,i));\n  }\n  \n  for (i=0;i<N;i++){\n  \n    t2[i]=y[i]+0.5*(k2[i]=step*f(x+h, t1, i));\n  }\n  \n  for (i=0;i<N;i++){\n  \n    t3[i]=y[i]+ (k3[i]=step*f(x+h, t2, i));\n  }\n  \n  for (i=0;i<N;i++){\n  \n    k4[i]= step*f(x+step, t3, i);\n  }\n  \n  for (i=0;i<N;i++){\n  \n    y[i]+=(k1[i]+2*k2[i]+2*k3[i]+k4[i])/6.0;\n  }\n}\n  \ndouble f(double x, double y[], int i){\n  \n  if (i==0)\n    x=y[1]; /* derivative of first equation */\n  if (i==1)\n    x=-10*y[0]-0.5*y[1];\n  return x;\n} \n 模擬結果為: \n \n 假如拿掉 Damper, 則結果為: \n \n 假如將 Runge-Kutta C 改寫為 Javascript, 並在網頁中直接以 plotly.js 畫圖: \n  引入 Plotly.js  \n \n  用於顯示運動繪圖的 div  \n \n \n 上列 Javascript 模擬運算的超文件為: \n <!-- 引入 Plotly.js -->\n<script src="https://cdn.plot.ly/plotly-latest.min.js"></script>\n<!-- 用於顯示運動繪圖的 div -->\n<div id="rkmotionPlot"></div>\n<script>\nconst N = 2; // number of first order equations\nconst dist = 0.01; // stepsize in t\nconst MAX = 10.0; // max for t\n\nlet outputDataDamping = []; // to store data for displacement with damping\nlet output1DataDamping = []; // to store data for velocity with damping\nlet outputDataNoDamping = []; // to store data for displacement without damping\nlet output1DataNoDamping = []; // to store data for velocity without damping\n\nfunction runge4(x, y, step, damping = false) {\n    let h = step / 2.0;\n    let t1 = [];\n    let t2 = [];\n    let t3 = [];\n    let k1 = [];\n    let k2 = [];\n    let k3 = [];\n    let k4 = [];\n\n    for (let i = 0; i < N; i++) {\n        t1[i] = y[i] + 0.5 * (k1[i] = step * f(x, y, i, damping));\n    }\n\n    for (let i = 0; i < N; i++) {\n        t2[i] = y[i] + 0.5 * (k2[i] = step * f(x + h, t1, i, damping));\n    }\n\n    for (let i = 0; i < N; i++) {\n        t3[i] = y[i] + (k3[i] = step * f(x + h, t2, i, damping));\n    }\n\n    for (let i = 0; i < N; i++) {\n        k4[i] = step * f(x + step, t3, i, damping);\n    }\n\n    for (let i = 0; i < N; i++) {\n        y[i] += (k1[i] + 2 * k2[i] + 2 * k3[i] + k4[i]) / 6.0;\n    }\n}\n\nfunction f(x, y, i, damping = false) {\n    if (i === 0) {\n        return y[1]; // derivative of first equation (velocity)\n    }\n    if (i === 1) {\n        if (damping) {\n            return -10 * y[0] - 0.5 * y[1]; // with damping\n        } else {\n            return -10 * y[0]; // without damping\n        }\n    }\n    return 0;\n}\n\nfunction simulateMotion() {\n    let t = 0.0;\n    let yDamping = [0.2, 0.0]; // initial position and velocity with damping\n    let yNoDamping = [0.2, 0.0]; // initial position and velocity without damping\n\n    for (let j = 1; j * dist <= MAX; j++) {\n        t = j * dist;\n        runge4(t, yDamping, dist, true); // simulate with damping\n        runge4(t, yNoDamping, dist, false); // simulate without damping\n        outputDataDamping.push([t, yDamping[0]]);\n        output1DataDamping.push([t, yDamping[1]]);\n        outputDataNoDamping.push([t, yNoDamping[0]]);\n        output1DataNoDamping.push([t, yNoDamping[1]]);\n    }\n\n    // Plot the data using Plotly.js\n    plotMotion();\n}\n\nfunction plotMotion() {\n    // Create traces for displacement and velocity with damping\n    const displacementTraceDamping = {\n        x: outputDataDamping.map((dataPoint) => dataPoint[0]),\n        y: outputDataDamping.map((dataPoint) => dataPoint[1]),\n        mode: \'lines\',\n        name: \'Displacement (Damping)\',\n    };\n\n    const velocityTraceDamping = {\n        x: output1DataDamping.map((dataPoint) => dataPoint[0]),\n        y: output1DataDamping.map((dataPoint) => dataPoint[1]),\n        mode: \'lines\',\n        name: \'Velocity (Damping)\',\n    };\n\n    // Create traces for displacement and velocity without damping\n    const displacementTraceNoDamping = {\n        x: outputDataNoDamping.map((dataPoint) => dataPoint[0]),\n        y: outputDataNoDamping.map((dataPoint) => dataPoint[1]),\n        mode: \'lines\',\n        name: \'Displacement (No Damping)\',\n    };\n\n    const velocityTraceNoDamping = {\n        x: output1DataNoDamping.map((dataPoint) => dataPoint[0]),\n        y: output1DataNoDamping.map((dataPoint) => dataPoint[1]),\n        mode: \'lines\',\n        name: \'Velocity (No Damping)\',\n    };\n\n    const data = [\n        displacementTraceDamping,\n        velocityTraceDamping,\n        displacementTraceNoDamping,\n        velocityTraceNoDamping,\n    ];\n\n    // Layout configuration\n    const layout = {\n        title: \'Displacement and Velocity vs. Time\',\n        xaxis: {\n            title: \'Time (s)\',\n        },\n        yaxis: {\n            title: \'Displacement / Velocity\',\n        },\n    };\n\n    // Plot the graph\n    Plotly.newPlot(\'rkmotionPlot\', data, layout);\n}\n\n// Call the simulation function when the page loads\nwindow.onload = simulateMotion;\n</script> \n \n 最後, 將 Javascript 改為可以讓使用者選擇模擬參數以及起始條件: \n \n 質量 (m):   \n 彈簧常數 (k):   \n 阻尼係數 (c):   \n 初始位移 (x0):   \n 初始速度 (v0):   \n 模擬時間 (endTime):   \n 模擬運動 (有阻尼)   模擬運動 (無阻尼) \n  請注意!! 每一個 plotly.js 繪圖必須有各自的 id 名稱  \n \n \n 上列可輸入模擬參數與起始條件的 html 程式碼: \n <div><label for="mass">質量 (m):</label> <input id="mass" type="number" value="1.0"></div>\n<div><label for="springConstant">彈簧常數 (k):</label> <input id="springConstant" type="number" value="10.0"></div>\n<div><label for="dampingCoefficient">阻尼係數 (c):</label> <input id="dampingCoefficient" type="number" value="0.5"></div>\n<div><label for="initialDisplacement">初始位移 (x0):</label> <input id="initialDisplacement" type="number" value="0.2"></div>\n<div><label for="initialVelocity">初始速度 (v0):</label> <input id="initialVelocity" type="number" value="0.0"></div>\n    \n<div><label for="endTime">模擬時間 (endTime):</label> <input id="endTime" type="number" value="10.0"></div>\n    \n<p><button id="withDamping">模擬運動 (有阻尼)</button> <button id="withoutDamping">模擬運動 (無阻尼)</button></p>\n<!-- 請注意!! 每一個 plotly.js 繪圖必須有各自的 id 名稱 -->\n<div id="rkmotionPlot2"></div>\n<script>// <![CDATA[\n// 函數包裝，避免變數衝突\n    (function () {\n        const N = 2; // number of first order equations\n        const dist = 0.01; // stepsize in t\n        //const MAX = 10.0; // max for t\n        const endTime = parseFloat(document.getElementById(\'endTime\').value);\n\n        // for debuging\n        const mass = parseFloat(document.getElementById(\'mass\').value);\n        const springConstant = parseFloat(document.getElementById(\'springConstant\').value);\n        const dampingCoefficient = parseFloat(document.getElementById(\'dampingCoefficient\').value);\n        const initialDisplacement = parseFloat(document.getElementById(\'initialDisplacement\').value);\n        const initialVelocity = parseFloat(document.getElementById(\'initialVelocity\').value);\n        /*\n            console.log(\'Mass:\', mass);\n            console.log(\'Spring Constant:\', springConstant);\n            console.log(\'Damping Coefficient:\', dampingCoefficient);\n            console.log(\'Initial Displacement:\', initialDisplacement);\n            console.log(\'Initial Velocity:\', initialVelocity);\n         */\n\n\n        let outputDataWithDamping = []; // to store data for displacement and velocity with damping\n        let outputDataWithoutDamping = []; // to store data for displacement and velocity without damping\n\n        function runge4(x, y, step, damping = false) {\n            let h = step / 2.0;\n            let t1 = [];\n            let t2 = [];\n            let t3 = [];\n            let k1 = [];\n            let k2 = [];\n            let k3 = [];\n            let k4 = [];\n\n            for (let i = 0; i < N; i++) {\n                t1[i] = y[i] + 0.5 * (k1[i] = step * f(x, y, i, damping));\n            }\n\n            for (let i = 0; i < N; i++) {\n                t2[i] = y[i] + 0.5 * (k2[i] = step * f(x + h, t1, i, damping));\n            }\n\n            for (let i = 0; i < N; i++) {\n                t3[i] = y[i] + (k3[i] = step * f(x + h, t2, i, damping));\n            }\n\n            for (let i = 0; i < N; i++) {\n                k4[i] = step * f(x + step, t3, i, damping);\n            }\n\n            for (let i = 0; i < N; i++) {\n                y[i] += (k1[i] + 2 * k2[i] + 2 * k3[i] + k4[i]) / 6.0;\n            }\n        }\n\n        function f(x, y, i, damping = false) {\n            if (i === 0) {\n                return y[1]; // derivative of first equation (velocity)\n            }\n            if (i === 1) {\n                if (damping) {\n                    return (-springConstant * y[0] - dampingCoefficient * y[1])/mass; // with damping\n                } else {\n                    return (-springConstant * y[0])/mass; // without damping\n                }\n            }\n            return 0;\n        }\n\n        function simulateMotionWithDamping() {\n            let t = 0.0;\n            let y = [\n                parseFloat(document.getElementById(\'initialDisplacement\').value),\n                parseFloat(document.getElementById(\'initialVelocity\').value)\n            ];\n\n            outputDataWithDamping = []; // Clear previous data\n            simulateMotion(t, y, true); // Simulate with damping\n        // for debuging, yes we got the values\n        //console.log(\'outputDataWithDamping:\', outputDataWithDamping); \n            plotMotion(true); // Plot with damping\n        }\n\n        function simulateMotionWithoutDamping() {\n            let t = 0.0;\n            let y = [\n                parseFloat(document.getElementById(\'initialDisplacement\').value),\n                parseFloat(document.getElementById(\'initialVelocity\').value)\n            ];\n\n            outputDataWithoutDamping = []; // Clear previous data\n            simulateMotion(t, y, false); // Simulate without damping\n        // for debuging, we got the values\n        //console.log(\'outputDataWithoutDamping:\', outputDataWithoutDamping); \n            plotMotion(false); // Plot without damping\n        }\n\n        // for debuging\n        function simulateMotion(t, y, damping = false) {\n            for (let j = 1; j * dist <= endTime; j++) {\n                t = j * dist;\n                runge4(t, y, dist, damping);\n                if (damping) {\n                    outputDataWithDamping.push([t, y[0], y[1]]);\n                } else {\n                    outputDataWithoutDamping.push([t, y[0], y[1]]);\n                }\n\n                // Log the data for debugging\n                //console.log(\'t:\', t);\n                //console.log(\'y:\', y);\n            }\n                // we do get the array values\n                //console.log(\'outputDataWithDamping:\', outputDataWithDamping);\n                //console.log(\'outputDataWithoutDamping:\', outputDataWithoutDamping); \n        }\n\n\n        function plotMotion(damping = false) {\n            let data = [];\n            if (damping) {\n                // Create traces for displacement and velocity with damping\n                data.push({\n                    x: outputDataWithDamping.map((dataPoint) => dataPoint[0]),\n                    y: outputDataWithDamping.map((dataPoint) => dataPoint[1]),\n                    mode: \'lines\',\n                    name: \'Displacement (Damping)\',\n                });\n                data.push({\n                    x: outputDataWithDamping.map((dataPoint) => dataPoint[0]),\n                    y: outputDataWithDamping.map((dataPoint) => dataPoint[2]),\n                    mode: \'lines\',\n                    name: \'Velocity (Damping)\',\n                });\n            } else {\n                // Create traces for displacement and velocity without damping\n                data.push({\n                    x: outputDataWithoutDamping.map((dataPoint) => dataPoint[0]),\n                    y: outputDataWithoutDamping.map((dataPoint) => dataPoint[1]),\n                    mode: \'lines\',\n                    name: \'Displacement (No Damping)\',\n                });\n                data.push({\n                    x: outputDataWithoutDamping.map((dataPoint) => dataPoint[0]),\n                    y: outputDataWithoutDamping.map((dataPoint) => dataPoint[2]),\n                    mode: \'lines\',\n                    name: \'Velocity (No Damping)\',\n                });\n            }\n\n            // Layout configuration\n            const layout = {\n                title: \'Displacement and Velocity vs. Time\',\n                xaxis: {\n                    title: \'Time (s)\',\n                },\n                yaxis: {\n                    title: \'Displacement / Velocity\',\n                },\n            };\n\n            // Plot the graph\n            Plotly.newPlot(\'rkmotionPlot2\', data, layout);\n        }\n\n        // for debuging\n        //console.log(outputDataWithDamping);\n        //console.log(outputDataWithoutDamping);\n\n        // Call the simulation function when the page loads\n        //simulateMotionWithDamping(); // Initial simulation with damping\n        // Attach an event listener to the button\n        document.getElementById("withDamping").addEventListener("click", function () {\n            //console.log("Button with damping clicked.");\n            simulateMotionWithDamping();\n        });\n\n        document.getElementById("withoutDamping").addEventListener("click", function () {\n            //console.log("Button without damping clicked.");\n            simulateMotionWithoutDamping();\n        });\n\n    })();\n// ]]></script> \n \n Question: 如何讓模擬變數表單值變更後, 無需重新 refresh 頁面即可繪出運算結果?', 'tags': '', 'url': 'ANSI C.html'}, {'title': 'on_linux', 'text': '', 'tags': '', 'url': 'on_linux.html'}, {'title': 'on_windows', 'text': '何謂編譯? \n 利用 Tiny C Compiler 編譯 \n 利用 MSYS2 中的 GNU C Compiler 編譯 \n 利用 Visual Studio C Compiler 編譯', 'tags': '', 'url': 'on_windows.html'}, {'title': '開發工具', 'text': '3. 開發程式工具 (解決特定問題) \n References: \n https://www.codecademy.com/resources/blog/20-code-challenges/ \n https://www.freecodecamp.org/news/python-projects-for-beginners/ \xa0', 'tags': '', 'url': '開發工具.html'}, {'title': '程式專案', 'text': '機械設計工程師專業的計算機程式初學者被要求必須透過開發一組程式來解決問題, 比較適合朝那些方向進行此一專案? \n 初階 - 中階 \n https://www.freecodecamp.org/news/python-projects-for-beginners/ \xa0 \n \n 進階自學系統 \n CoppeliaSim \n 2023.03 最新版本為 4.5.1 \n 4.4.0 則發布於 2022.09 \n ZeroMQ Remote API for CoppeliaSim \n WebSocket plugin for CoppeliaSim \n three.js Frontend \n RoboDK \n 2023.07 最新的版本為 \xa0 Download 5.6.2 \n Download 5.2.2 \xa0 則發布於 2021.03.22 \n RoboDK 源自 \xa0 https://www.parallemic.org/RoKiSim.html \n 在計算機程式課程中, 我們可以利用 RoboDK 中的 Robot 控制來練習 Python 各種語法的應用, 其中也將牽涉一些線性代數 (Linear Algebra, \xa0 1 , \xa0 2 ) 與幾何 (Geometry, \xa0 1 , \xa0 2 , \xa0 3 ) 的應用. \n', 'tags': '', 'url': '程式專案.html'}, {'title': '課程座次', 'text': '2023.09.11 從  112 學年度第一學期教師授課表 中, 擷取各班修課名單如下: \n cp2023_a_studno.txt \n cp2023_b_studno.txt \n cad2023_a_studno.txt \n cad2023_b_studno.txt \n 若以 Python 讀取上列學員名單, 並依照順序排入電腦輔助設計室後, 可得到各班在開學週時的座位表: \n with open("cp2023_a_studno.txt", encoding="utf-8") as file:\n    data = file.read().splitlines()\n#print(data)\n# Define the number of elements to print in each row\nelements_per_row = 9\n# Iterate through the list and print elements\nfor i, item in enumerate(data, 1):\n    print(item, end=\'\\t\')  # Print the element followed by a tab character\n    if i % elements_per_row == 0:\n        # If we\'ve printed 9 elements, start a new line\n        print()\n    \n    \n \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n 設一甲 計算機程式座位表: \n \n \n \n 設一乙 計算機程式座位表: \n \n \n \n \n 設二甲 電腦輔助設計與實習座位表: \n \n \n \n \n 設二乙 電腦輔助設計與實習座位表: \n \n \n \n \n 上列 Brython 程式碼範例: \n <div id="brython_div1"></div>\n<p>\n<script type="text/python3">\nfrom browser import html, document\nbrython_div = document["brython_div1"]\n\ndata = open("https://mde.tw/cpnote/downloads/cp2023_a_studno.txt").read().splitlines()\n#print(data)\n# Define the number of elements to print in each row\nelements_per_row = 9\nrow = 1\n# Iterate through the list and print elements\nfor i, item in enumerate(data, 1):\n    if i % elements_per_row == 1:\n        brython_div <= "第" + str(row) + "列: "\n        row = row + 1\n    #print(item, end=\'\\t\')  # Print the element followed by a tab character\n    brython_div <= item + "  "\n    if i % elements_per_row == 0:\n        # If we\'ve printed 9 elements, start a new line\n        #print()\n        brython_div <= html.BR()\n</script> \n 由於  cp2023_a_studno.txt  為 w1 從  https://qry.nfu.edu.tw/studlist.php?selyr=1121&seqno=0813  取得修課學員後存檔後運用, 但是課程進行中, 學員加退選後該資料可能產生變動, 因此若後續要利用修課學員名單建立相關網際連結時, 必須設法直接從  https://qry.nfu.edu.tw/studlist.php?selyr=1121&seqno=0813  讀取資料後進行運用.', 'tags': '', 'url': '課程座次.html'}, {'title': '課程總結', 'text': '4. 課程總結 \n 錄製簡報影片 \n mp4 \n 編寫總結報告 \n pdf \n 將課程摘要納入個人領英 \n https://www.linkedin.com/ \n', 'tags': '', 'url': '課程總結.html'}, {'title': 'QandA', 'text': '如何利用 Github 建立網站? \n Click me \n', 'tags': '', 'url': 'QandA.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};