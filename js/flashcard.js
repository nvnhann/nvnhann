const words = [
    { id: 1, kanji: "温泉", hiragana: "おんせん", meaning: "suối nước nóng" },
    { id: 2, kanji: "過ごす", hiragana: "すごす", meaning: "trải qua, tận hưởng" },
    { id: 3, kanji: "温泉旅館", hiragana: "おんせんりょかん", meaning: "nhà trọ kiểu Nhật có suối nước nóng" },
    { id: 4, kanji: "パンフレット", hiragana: "パンフレット", meaning: "tờ rơi dạng sách gấp" },
    { id: 5, kanji: "泊まる", hiragana: "とまる", meaning: "trọ lại" },
    { id: 6, kanji: "行き先", hiragana: "いきさき", meaning: "nơi đến, điểm đến" },
    { id: 7, kanji: "人気がある", hiragana: "にんきがある", meaning: "được yêu thích" },
    { id: 8, kanji: "北海道", hiragana: "ほっかいどう", meaning: "Hokkaido" },
    { id: 9, kanji: "スキー", hiragana: "スキー", meaning: "trượt tuyết" },
    { id: 10, kanji: "充実した", hiragana: "じゅうじつした", meaning: "phong phú, đầy đủ" },
    { id: 11, kanji: "ニュージーランド", hiragana: "ニュージーランド", meaning: "New Zealand" },
    { id: 12, kanji: "氷河", hiragana: "ひょうが", meaning: "sông băng" },
    { id: 13, kanji: "素晴らしい", hiragana: "すばらしい", meaning: "tuyệt vời" },
    { id: 14, kanji: "バンジージャンプ", hiragana: "バンジージャンプ", meaning: "nhảy Bungee" },
    { id: 15, kanji: "アクティビティ", hiragana: "アクティビティ", meaning: "hoạt động" },
    { id: 16, kanji: "パリ", hiragana: "パリ", meaning: "Paris" },
    { id: 17, kanji: "エッフェル塔", hiragana: "エッフェルとう", meaning: "tháp Eiffel" },
    { id: 18, kanji: "遺跡", hiragana: "いせき", meaning: "di tích" },
    { id: 19, kanji: "カンボジア", hiragana: "カンボジア", meaning: "Cam-pu-chia" },
    { id: 20, kanji: "アンコールワット", hiragana: "アンコールワット", meaning: "Ăng-co Vát" },
    { id: 21, kanji: "沖縄", hiragana: "おきなわ", meaning: "Okinawa" },
    { id: 22, kanji: "高級リゾート", hiragana: "こうきゅうリゾート", meaning: "khu nghỉ dưỡng cao cấp" },
    { id: 23, kanji: "大満足", hiragana: "だいまんぞく", meaning: "vô cùng hài lòng" },
    { id: 24, kanji: "サービス", hiragana: "サービス", meaning: "dịch vụ" },
    { id: 25, kanji: "観光地", hiragana: "かんこうち", meaning: "điểm tham quan" },
    { id: 26, kanji: "自然", hiragana: "しぜん", meaning: "tự nhiên" },
    { id: 27, kanji: "歴史", hiragana: "れきし", meaning: "lịch sử" },
    { id: 28, kanji: "予約サイト", hiragana: "よやくサイト", meaning: "trang web đặt vé" },
    { id: 29, kanji: "名湯", hiragana: "めいとう", meaning: "suối nước nóng nổi tiếng" },
    { id: 30, kanji: "秘湯", hiragana: "ひとう", meaning: "suối nước nóng hoang sơ" },
    { id: 31, kanji: "探す", hiragana: "さがす", meaning: "tìm kiếm" },
    { id: 32, kanji: "日付", hiragana: "ひづけ", meaning: "ngày" },
    { id: 33, kanji: "日付未定", hiragana: "ひづけみてい", meaning: "chưa rõ ngày cụ thể" },
    { id: 34, kanji: "一泊", hiragana: "いっぱく", meaning: "… đêm" },
    { id: 35, kanji: "〜部屋", hiragana: "〜へや", meaning: "… phòng" },
    { id: 36, kanji: "〜名", hiragana: "〜めい", meaning: "… người" },
    { id: 37, kanji: "都道府県", hiragana: "とどうふけん", meaning: "cách gọi các tỉnh thành phố của Nhật" },
    { id: 38, kanji: "温泉地", hiragana: "おんせんち", meaning: "khu có suối nước nóng" },
    { id: 39, kanji: "エリア", hiragana: "エリア", meaning: "khu vực, vùng" },
    { id: 40, kanji: "料金", hiragana: "りょうきん", meaning: "phí" },
    { id: 41, kanji: "検索", hiragana: "けんさく", meaning: "tìm kiếm" },
    { id: 42, kanji: "こだわり条件", hiragana: "こだわりじょうけん", meaning: "bộ lọc tìm kiếm" },
    { id: 43, kanji: "こだわる", hiragana: "こだわる", meaning: "chọn lọc" },
    { id: 44, kanji: "露天風呂", hiragana: "ろてんぶろ", meaning: "bồn tắm ngoài trời" },
    { id: 45, kanji: "展望風呂", hiragana: "てんぼうぶろ", meaning: "bồn tắm có hướng nhìn đẹp" },
    { id: 46, kanji: "貸し切り風呂", hiragana: "かしきりぶろ", meaning: "bồn tắm thuê riêng" },
    { id: 47, kanji: "家族風呂", hiragana: "かぞくぶろ", meaning: "bồn tắm gia đình" },
    { id: 48, kanji: "源泉かけ流し", hiragana: "げんせんかけながし", meaning: "dòng nước nóng từ nguồn" },
    { id: 49, kanji: "にごり湯", hiragana: "にごりゆ", meaning: "suối nước nóng có màu đục" },
    { id: 50, kanji: "和室", hiragana: "わしつ", meaning: "phòng kiểu Nhật" },
    { id: 51, kanji: "洋室", hiragana: "ようしつ", meaning: "phòng kiểu Âu" },
    { id: 52, kanji: "〜つき", hiragana: "〜つき", meaning: "kèm …" },
    { id: 53, kanji: "禁煙ルーム", hiragana: "きんえんルーム", meaning: "phòng cấm hút thuốc" },
    { id: 54, kanji: "食事", hiragana: "しょくじ", meaning: "bữa ăn" },
    { id: 55, kanji: "(お)部屋食", hiragana: "(お)へやしょく", meaning: "bữa ăn tại phòng" },
    { id: 56, kanji: "バイキング", hiragana: "バイキング", meaning: "buffet" },
    { id: 57, kanji: "ビュッフェ", hiragana: "ビュッフェ", meaning: "buffet" },
    { id: 58, kanji: "地元", hiragana: "じもと", meaning: "suối nước nóng hoang sơ" },
    { id: 59, kanji: "番組", hiragana: "ばんぐみ", meaning: "chương trình truyền hình" },
    { id: 60, kanji: "予想する", hiragana: "よそうする", meaning: "dự đoán" },
    { id: 61, kanji: "地獄谷温泉", hiragana: "じごくだにおんせん", meaning: "suối Jigokudani" },
    { id: 62, kanji: "白馬温泉", hiragana: "はくばおんせん", meaning: "suối Hakubayari" },
    { id: 63, kanji: "鶴の湯温泉", hiragana: "つるのゆおんせん", meaning: "suối Tsurunoyu" },
    { id: 64, kanji: "白浜温泉", hiragana: "しらはまおんせん", meaning: "suối Shirahama" },
    { id: 65, kanji: "サル（猿）", hiragana: "さる", meaning: "con khỉ" },
    { id: 66, kanji: "特徴", hiragana: "とくちょう", meaning: "đặc trưng" },
    { id: 67, kanji: "スノーモンキー", hiragana: "スノーモンキー", meaning: "khỉ tuyết, khỉ lông trắng" },
    { id: 68, kanji: "人間", hiragana: "にんげん", meaning: "con người" },
    { id: 69, kanji: "〜用", hiragana: "〜よう", meaning: "dùng cho …" },
    { id: 70, kanji: "歴史", hiragana: "れきし", meaning: "lịch sử" },
    { id: 71, kanji: "登山", hiragana: "とざん", meaning: "leo núi" },
    { id: 72, kanji: "真っ白", hiragana: "まっしろ", meaning: "trắng xóa" },
    { id: 73, kanji: "雲の上", hiragana: "くものうえ", meaning: "phía trên những đám mây" },
    { id: 74, kanji: "山小屋", hiragana: "やまごや", meaning: "nhà trọ trên núi" },
    { id: 75, kanji: "予約", hiragana: "よやく", meaning: "đặt trước" },
    { id: 76, kanji: "レポーター", hiragana: "レポーター", meaning: "phóng viên" },
    { id: 77, kanji: "画面", hiragana: "がめん", meaning: "màn hình" },
    { id: 78, kanji: "部分", hiragana: "ぶぶん", meaning: "phần" },
    { id: 79, kanji: "長野県", hiragana: "ながのけん", meaning: "tỉnh Nagano" },
    { id: 80, kanji: "海外", hiragana: "かいがい", meaning: "nước ngoài, hải ngoại" },
    { id: 81, kanji: "露天風呂", hiragana: "ろてんぶろ", meaning: "bồn tắm ngoài trời" },
    { id: 82, kanji: "眺め", hiragana: "ながめ", meaning: "tầm nhìn" },
    { id: 83, kanji: "ご来光", hiragana: "ごらいこう", meaning: "mặt trời mọc" },
    { id: 84, kanji: "秋田県", hiragana: "あきたけん", meaning: "tỉnh Akita" },
    { id: 85, kanji: "乳頭温泉郷", hiragana: "にゅうとうおんせんきょう", meaning: "khu suối nước nóng Nyuto" },
    { id: 86, kanji: "江戸時代", hiragana: "えどじだい", meaning: "thời Edo" },
    { id: 87, kanji: "〜以上", hiragana: "〜いじょう", meaning: "trên…, nhiều hơn…" },
    { id: 88, kanji: "歴史のある", hiragana: "れきしのある", meaning: "có bề dày lịch sử" },
    { id: 89, kanji: "秘湯", hiragana: "ひとう", meaning: "suối nước nóng hoang sơ" },
    { id: 90, kanji: "無風呂気", hiragana: "むふうろき", meaning: "bầu không khí" },
    { id: 91, kanji: "求める", hiragana: "もとめる", meaning: "tìm kiếm, yêu cầu" },
    { id: 92, kanji: "和歌山県", hiragana: "わかやまけん", meaning: "tỉnh Wakayama" },
    { id: 93, kanji: "崎の湯", hiragana: "さきのゆ", meaning: "Sakinoyu" },
    { id: 94, kanji: "景色", hiragana: "けしき", meaning: "phong cảnh" },
    { id: 95, kanji: "新鮮な", hiragana: "しんせんな", meaning: "tươi" },
    { id: 96, kanji: "音声スクリプト", hiragana: "おんせいスクリプト", meaning: "script nghe" },
    { id: 97, kanji: "世界的に", hiragana: "せかいてきに", meaning: "trên toàn thế giới" },
    { id: 98, kanji: "なんと", hiragana: "なんと", meaning: "ngạc nhiên thay…" },
    { id: 99, kanji: "〜専用", hiragana: "〜せんよう", meaning: "chuyên dùng để…" },
    { id: 100, kanji: "温泉旅館", hiragana: "おんせんりょかん", meaning: "nhà trọ kiểu Nhật có suối nước nóng" },
    { id: 101, kanji: "運がいい", hiragana: "うんがいい", meaning: "may mắn" },
    { id: 102, kanji: "混浴する", hiragana: "こんよくする", meaning: "tắm chung" },
    { id: 103, kanji: "やっと", hiragana: "やっと", meaning: "cuối cùng thì" },
    { id: 104, kanji: "たどり着く", hiragana: "たどりつく", meaning: "cuối cùng cũng tới (sau nhiều vất vả, khổ sở)" },
    { id: 105, kanji: "北アルプス", hiragana: "きたアルプス", meaning: "Bắc Alps" },
    { id: 106, kanji: "シーズン", hiragana: "シーズン", meaning: "mùa" },
    { id: 107, kanji: "それにしても", hiragana: "それにしても", meaning: "dù vậy" },
    { id: 108, kanji: "きつい", hiragana: "きつい", meaning: "chật" },
    { id: 109, kanji: "苦労する", hiragana: "くろうする", meaning: "chịu gian khổ" },
    { id: 110, kanji: "標高", hiragana: "ひょうこう", meaning: "độ cao so với mực nước biển" },
    { id: 111, kanji: "まさに", hiragana: "まさに", meaning: "quả thực là" },
    { id: 112, kanji: "早起きする", hiragana: "はやおきする", meaning: "dậy sớm" },
    { id: 113, kanji: "ぜったいに", hiragana: "ぜったいに", meaning: "chắc chắn" },
    { id: 114, kanji: "自然", hiragana: "しぜん", meaning: "tự nhiên, thiên nhiên" },
    { id: 115, kanji: "湯の花", hiragana: "ゆのはな", meaning: "(màu sắc) đục" },
    { id: 116, kanji: "(お)湯", hiragana: "おゆ", meaning: "nước nóng" },
    { id: 117, kanji: "そのまま", hiragana: "そのまま", meaning: "… vẫn thế, không đổi" },
    { id: 118, kanji: "囲炉裏", hiragana: "いろり", meaning: "bếp lửa sưởi" },
    { id: 119, kanji: "いただく", hiragana: "いただく", meaning: "dùng (bữa)" },
    { id: 120, kanji: "まるで", hiragana: "まるで", meaning: "y hệt như" },
    { id: 121, kanji: "タイムスリップする", hiragana: "タイムスリップする", meaning: "vượt thời gian" },
    { id: 122, kanji: "週末", hiragana: "しゅうまつ", meaning: "cuối tuần" },
    { id: 123, kanji: "オーシャンビュー", hiragana: "オーシャンビュー", meaning: "cảnh biển" },
    { id: 124, kanji: "幸せな", hiragana: "しあわせな", meaning: "hạnh phúc" },
    { id: 125, kanji: "〜感じだ", hiragana: "〜かんじだ", meaning: "có cảm giác…" },
    { id: 126, kanji: "メイン", hiragana: "メイン", meaning: "chính, quan trọng" },
    { id: 127, kanji: "伊勢えび", hiragana: "いせえび", meaning: "tôm hùm" },
    { id: 128, kanji: "早速", hiragana: "さっそく", meaning: "ngay lập tức" },
    { id: 129, kanji: "とろっと", hiragana: "とろっと", meaning: "(tan chảy) ngập trong miệng" },
    { id: 130, kanji: "溶ける", hiragana: "とける", meaning: "tan chảy" },
    { id: 131, kanji: "旅館", hiragana: "りょかん", meaning: "nhà trọ kiểu Nhật" },
    { id: 132, kanji: "温泉旅館", hiragana: "おんせんりょかん", meaning: "nhà trọ kiểu Nhật có suối nước nóng" },
    { id: 133, kanji: "泊まる", hiragana: "とまる", meaning: "trọ lại" },
    { id: 134, kanji: "予約する", hiragana: "よやくする", meaning: "đặt trước" },
    { id: 135, kanji: "インド", hiragana: "インド", meaning: "Ấn Độ" },
    { id: 136, kanji: "ニューデリー", hiragana: "ニューデリー", meaning: "New Delhi" },
    { id: 137, kanji: "日本文化センター", hiragana: "にほんぶんかセンター", meaning: "Trung Tâm Văn hóa Nhật Bản" },
    { id: 138, kanji: "〜回目", hiragana: "〜かいめ", meaning: "lần thứ…" },
    { id: 139, kanji: "草津温泉", hiragana: "くさつおんせん", meaning: "suối nước nóng Kusatsu" },
    { id: 140, kanji: "三朝温泉", hiragana: "みささおんせん", meaning: "suối nước nóng Sanshukan" },
    { id: 141, kanji: "女将", hiragana: "おかみ", meaning: "bà chủ nhà trọ" },
    { id: 142, kanji: "〜名様", hiragana: "〜めいさま", meaning: "… người" },
    { id: 143, kanji: "食事", hiragana: "しょくじ", meaning: "bữa ăn" },
    { id: 144, kanji: "本当に", hiragana: "ほんとうに", meaning: "thật ra thì…" },
    { id: 145, kanji: "メール", hiragana: "メール", meaning: "thư điện tử" },
    { id: 146, kanji: "（お）刺身", hiragana: "おさしみ", meaning: "gỏi cá" },
    { id: 147, kanji: "すき焼き", hiragana: "すきやき", meaning: "sukiyaki" },
    { id: 148, kanji: "代わりに", hiragana: "かわりに", meaning: "thay cho" },
    { id: 149, kanji: "湯豆腐", hiragana: "ゆどうふ", meaning: "đậu phụ hầm nước nóng" },
    { id: 150, kanji: "（お）鍋", hiragana: "おなべ", meaning: "lẩu" },
    { id: 151, kanji: "プライベート", hiragana: "プライベート", meaning: "riêng tư, cá nhân" },
    { id: 152, kanji: "包みいた", hiragana: "つつみいた", meaning: "bao gồm…" },
    { id: 153, kanji: "大浴場", hiragana: "だいよくじょう", meaning: "phòng tắm công cộng" },
    { id: 154, kanji: "サイト", hiragana: "サイト", meaning: "trang web" },
    { id: 155, kanji: "家族風呂", hiragana: "かぞくぶろ", meaning: "phòng tắm gia đình" },
    { id: 156, kanji: "鍵をかける", hiragana: "かぎをかける", meaning: "khóa cửa" },
    { id: 157, kanji: "フロント", hiragana: "フロント", meaning: "quầy tiếp tân" },
    { id: 158, kanji: "（ご）来館", hiragana: "ごらいかん", meaning: "đến (nhà hàng, lữ quán) <kính ngữ>" },
    { id: 159, kanji: "ツアー", hiragana: "ツアー", meaning: "tour" },
    { id: 160, kanji: "ガイド", hiragana: "ガイド", meaning: "hướng dẫn" },
    { id: 161, kanji: "クーポン", hiragana: "クーポン", meaning: "phiếu ưu đãi" },
    { id: 162, kanji: "チェックイン", hiragana: "チェックイン", meaning: "làm thủ tục vào (khách sạn, sự kiện…), check in" },
    { id: 163, kanji: "まとめる", hiragana: "まとめる", meaning: "tổng hợp lại" },
    { id: 164, kanji: "翌日", hiragana: "よくじつ", meaning: "ngày hôm nay" },
    { id: 165, kanji: "アンケート", hiragana: "アンケート", meaning: "khảo sát" },
    { id: 166, kanji: "例外", hiragana: "れいがい", meaning: "ngoại lệ" },
    { id: 167, kanji: "付き", hiragana: "つき", meaning: "đi kèm theo" },
    { id: 168, kanji: "浴衣", hiragana: "ゆかた", meaning: "yukata (kimono mùa hè)" },
    { id: 169, kanji: "サイズ", hiragana: "サイズ", meaning: "kích cỡ" },
    { id: 170, kanji: "とりかえる", hiragana: "とりかえる", meaning: "đổi" },
    { id: 171, kanji: "露天風呂", hiragana: "ろてんぶろ", meaning: "bồn tắm ngoài trời" },
    { id: 172, kanji: "領収書", hiragana: "りょうしゅうしょ", meaning: "hóa đơn" },
    { id: 173, kanji: "かしこまりました", hiragana: "かしこまりました", meaning: "Tôi đã hiểu" },
    { id: 174, kanji: "チェックアウト", hiragana: "チェックアウト", meaning: "trả phòng (khách sạn, sự kiện…), check out" },
    { id: 175, kanji: "新様", hiragana: "しんよう", meaning: "kiểu kiểu tóc" },
    { id: 176, kanji: "当館", hiragana: "とうかん", meaning: "khách sạn/nhà tắm/nhà nghỉ… này" },
    { id: 177, kanji: "和室", hiragana: "わしつ", meaning: "phòng kiểu Nhật" },
    { id: 178, kanji: "コンセント", hiragana: "コンセント", meaning: "ổ cắm điện" },
    { id: 179, kanji: "アダプター", hiragana: "アダプター", meaning: "bộ chuyển đổi" },
    { id: 180, kanji: "生", hiragana: "なま", meaning: "tươi, sống" },
    { id: 181, kanji: "エアコン", hiragana: "エアコン", meaning: "điều hòa" },
    { id: 182, kanji: "変な", hiragana: "へんな", meaning: "lạ, khác lạ" },
    { id: 183, kanji: "順に", hiragana: "じゅんに", meaning: "theo thứ tự" },
    { id: 184, kanji: "マグロ", hiragana: "マグロ", meaning: "cá ngừ" },
    { id: 185, kanji: "タイ", hiragana: "タイ", meaning: "cá tráp" },
    { id: 186, kanji: "ヒラメ", hiragana: "ヒラメ", meaning: "cá thờn bơn" },
    { id: 187, kanji: "カンパチ", hiragana: "カンパチ", meaning: "cá cam" },
    { id: 188, kanji: "朝食", hiragana: "ちょうしょく", meaning: "bữa sáng" },
    { id: 189, kanji: "(お)会計", hiragana: "おかいけい", meaning: "thanh toán" },
    { id: 190, kanji: "ロールプレイ", hiragana: "ロールプレイ", meaning: "nhập vai" },
    { id: 191, kanji: "〜にあたる", hiragana: "〜にあたる", meaning: "tương ứng với…" },
    { id: 192, kanji: "提案する", hiragana: "ていあんする", meaning: "đưa ra phương án, đề xuất" },
    { id: 193, kanji: "断る", hiragana: "ことわる", meaning: "từ chối" },
    { id: 194, kanji: "くわしく", hiragana: "くわしく", meaning: "chi tiết, cụ thể" },
    { id: 195, kanji: "パターン", hiragana: "パターン", meaning: "kiểu, dạng" },
    { id: 196, kanji: "メニュー", hiragana: "メニュー", meaning: "thực đơn, menu" },
    { id: 197, kanji: "〜以外", hiragana: "〜いがい", meaning: "ngoại trừ…" },
    { id: 198, kanji: "送迎", hiragana: "そうげい", meaning: "đưa đón" },
    { id: 199, kanji: "人数", hiragana: "にんずう", meaning: "số người" },
    { id: 200, kanji: "変更する", hiragana: "へんこうする", meaning: "thay đổi" },
    { id: 201, kanji: "和食", hiragana: "わしょく", meaning: "món ăn Nhật" },
    { id: 202, kanji: "なっとう", hiragana: "なっとう", meaning: "đậu tương lên men" },
    { id: 203, kanji: "苦手な", hiragana: "にがてな", meaning: "không giỏi về…" },
    { id: 204, kanji: "別の", hiragana: "べつの", meaning: "… khác" },
    { id: 205, kanji: "洋食", hiragana: "ようしょく", meaning: "món Âu" },
    { id: 206, kanji: "目玉焼き", hiragana: "めだまやき", meaning: "trứng ốp la" },
    { id: 207, kanji: "ハム", hiragana: "ハム", meaning: "giăm bông" },
    { id: 208, kanji: "用意する", hiragana: "よういする", meaning: "chuẩn bị, sửa soạn" },
    { id: 209, kanji: "パンフレット", hiragana: "パンフレット", meaning: "tờ rơi dạng sách gấp" },
    { id: 210, kanji: "大江戸温泉物語", hiragana: "おおえどおんせんものがたり", meaning: "Oedo onsen monogatari" },
    { id: 211, kanji: "食事", hiragana: "しょくじ", meaning: "bữa ăn" },
    { id: 212, kanji: "浴衣", hiragana: "ゆかた", meaning: "yukata (kimono mùa hè)" },
    { id: 213, kanji: "ゲーム", hiragana: "ゲーム", meaning: "trò chơi" },
    { id: 214, kanji: "アニメイト", hiragana: "アニメイト", meaning: "Animate" },
    { id: 215, kanji: "カフェ", hiragana: "カフェ", meaning: "quán cà phê" },
    { id: 216, kanji: "キャラクターグッズ", hiragana: "キャラクターグッズ", meaning: "sản phẩm về nhân vật truyện/hoạt hình …" },
    { id: 217, kanji: "東京スカイツリー", hiragana: "とうきょうスカイツリー", meaning: "Tokyo Sky Tree" },
    { id: 218, kanji: "(お)土産", hiragana: "おみやげ", meaning: "quà lưu niệm" },
    { id: 219, kanji: "ライトアップ", hiragana: "ライトアップ", meaning: "lên đèn, thắp sáng" },
    { id: 220, kanji: "記念写真", hiragana: "きねんしゃしん", meaning: "ảnh lưu niệm" },
    { id: 221, kanji: "お台場", hiragana: "おだいば", meaning: "Odaiba" },
    { id: 222, kanji: "テーマパーク", hiragana: "テーマパーク", meaning: "công viên giải trí theo chủ đề" },
    { id: 223, kanji: "江戸", hiragana: "えど", meaning: "Edo" },
    { id: 224, kanji: "一日中", hiragana: "いちにちじゅう", meaning: "cả ngày" },
    { id: 225, kanji: "アニメショップ", hiragana: "アニメショップ", meaning: "cửa hàng anime" },
    { id: 226, kanji: "展望台", hiragana: "てんぼうだい", meaning: "đài quan sát" },
    { id: 227, kanji: "眺め", hiragana: "ながめ", meaning: "tầm nhìn" },
    { id: 228, kanji: "行き先", hiragana: "いきさき", meaning: "nơi đến, điểm đến" },
    { id: 229, kanji: "順番", hiragana: "じゅんばん", meaning: "thứ tự" }
  ];
  

const kanjiWords = [
    // { "id": 751, "kanji": "駐車", "hiragana": "ちゅうしゃ", "meaning": "Đỗ xe" },
];

let learnedWords = [];
let currentWord = null;
let isFlipped = false;
let isKanjiMode = false;
let remainingWords = [...words];

document.getElementById("total-count").innerText = words.length;

function getRandomWord() {
    if (remainingWords.length === 0) return null;
    return remainingWords[Math.floor(Math.random() * remainingWords.length)];
}

function updateCard() {
    const flashcard = document.getElementById("flashcard");

    if (remainingWords.length === 0) {
        document.getElementById("front-text").innerHTML = "🎉 Học xong rồi!";
        document.getElementById("back-text").innerHTML = "Không còn từ mới.";
        document.getElementById("btn-learned").disabled = true;
        document.getElementById("btn-forgotten").disabled = true;
        return;
    }

    document.getElementById("btn-learned").disabled = false;
    document.getElementById("btn-forgotten").disabled = false;

    flashcard.classList.add("turn");

    setTimeout(() => {
        currentWord = getRandomWord();
        isFlipped = false;
        flashcard.classList.remove("flip", "turn");

        if (isKanjiMode) {
            document.getElementById("front-text").innerHTML = currentWord.kanji;
            document.getElementById("back-text").innerHTML = `${currentWord.hiragana} - ${currentWord.meaning}`;
        } else {
            document.getElementById("front-text").innerHTML = currentWord.meaning;
            document.getElementById("back-text").innerHTML = `${currentWord.kanji} (${currentWord.hiragana})`;
        }

        flashcard.classList.add("appear");
        setTimeout(() => {
            flashcard.classList.remove("appear");
        }, 500);
    }, 500);
}

function toggleMode() {
    isKanjiMode = !isKanjiMode;
    document.getElementById("mode-text").innerText = isKanjiMode ? "Kanji" : "Từ Vựng";
    remainingWords = isKanjiMode ? [...kanjiWords] : [...words];
    document.getElementById("total-count").innerText = remainingWords.length;
    resetLearning();
}

function toggleFlip() {
    if (remainingWords.length === 0) return;
    isFlipped = !isFlipped;
    document.getElementById("flashcard").classList.toggle("flip");
}

function markLearned() {
    if (!currentWord) return;
    if (!learnedWords.includes(currentWord)) {
        learnedWords.push(currentWord);
        remainingWords = remainingWords.filter(word => word !== currentWord);
        document.getElementById("learned-count").innerText = learnedWords.length;
    }
    updateCard();
}

function markForgotten() {
    updateCard();
}

function resetLearning() {
    learnedWords = [];
    remainingWords = isKanjiMode ? [...kanjiWords] : [...words];
    document.getElementById("learned-count").innerText = "0";
    updateCard();
}

updateCard();