# MatchChase API Ekstra Verileri

Bu dokümanda MatchChase eski veritabanında olmayan ancak Sportradar Soccer Extended API'den alabileceğimiz tüm ekstra veriler detaylı bir şekilde listelenmiştir.

## 🎯 Genel Bakış

Sportradar API'si eski veritabanımızdan çok daha zengin veri sağlamaktadır. Bu ekstra veriler uygulamanızı önemli ölçüde geliştirebilir ve kullanıcı deneyimini artırabilir.

---

## 📊 Maç İstatistikleri - Ekstra Veriler

### 🏟️ **Temel Maç Bilgileri**

| Alan | Açıklama | Endpoint | Örnek Değer |
|------|----------|----------|-------------|
| `start_time_confirmed` | Maç saati kesin mi | `/sport_events/{id}/summary` | `true/false` |
| `resume_time` | Maç devam etme saati | `/sport_events/{id}/summary` | `2024-03-15T16:30:00Z` |
| `replaced_by` | Ertelenen maçın yeni ID'si | `/sport_events/{id}/summary` | `sr:sport_event:12345` |
| `attendance` | Seyirci sayısı | `/sport_events/{id}/summary` | `45000` |
| `neutral_ground` | Tarafsız saha mı | `/sport_events/{id}/summary` | `true/false` |

### 🌤️ **Hava Durumu Bilgileri**

| Alan | Açıklama | Endpoint | Örnek Değer |
|------|----------|----------|-------------|
| `weather.wind` | Rüzgar durumu | `/sport_events/{id}/summary` | `"light"` |
| `weather.wind_advantage` | Rüzgar avantajı | `/sport_events/{id}/summary` | `"none"` |
| `weather.temperature` | Sıcaklık (Celsius) | `/sport_events/{id}/summary` | `18` |
| `weather.weather_conditions` | Hava koşulları | `/sport_events/{id}/summary` | `"sunny"` |
| `weather.pitch_conditions` | Saha koşulları | `/sport_events/{id}/summary` | `"good"` |

### 📺 **Yayın Bilgileri**

| Alan | Açıklama | Endpoint | Örnek Değer |
|------|----------|----------|-------------|
| `channels[].name` | TV kanalı adı | `/sport_events/{id}/summary` | `"Sky Sports"` |
| `channels[].country` | Yayın ülkesi | `/sport_events/{id}/summary` | `"United Kingdom"` |
| `channels[].country_code` | Ülke kodu | `/sport_events/{id}/summary` | `"GB"` |
| `channels[].url` | Yayın URL'i | `/sport_events/{id}/summary` | `"https://..."` |

---

## 🏃‍♂️ Oyuncu İstatistikleri - Ekstra Veriler

### 📈 **Gelişmiş Performans Metrikleri**

| Alan | Açıklama | Endpoint | Örnek Değer |
|------|----------|----------|-------------|
| `aerial_duels_won` | Kazanılan hava topu mücadelesi | `/sport_events/{id}/extended_summary` | `8` |
| `aerial_duels_total` | Toplam hava topu mücadelesi | `/sport_events/{id}/extended_summary` | `12` |
| `chances_created` | Yaratılan fırsatlar | `/sport_events/{id}/extended_summary` | `3` |
| `clearances` | Uzaklaştırmalar | `/sport_events/{id}/extended_summary` | `7` |
| `crosses_successful` | Başarılı ortalar | `/sport_events/{id}/extended_summary` | `4` |
| `crosses_total` | Toplam ortalar | `/sport_events/{id}/extended_summary` | `9` |
| `defensive_actions` | Savunma aksiyonları | `/sport_events/{id}/extended_summary` | `15` |
| `dribbles_completed` | Başarılı dribling | `/sport_events/{id}/extended_summary` | `6` |
| `dribbles_total` | Toplam dribling denemesi | `/sport_events/{id}/extended_summary` | `8` |
| `duels_won` | Kazanılan ikili mücadeleler | `/sport_events/{id}/extended_summary` | `12` |
| `duels_total` | Toplam ikili mücadeleler | `/sport_events/{id}/extended_summary` | `18` |

### 🎯 **Pas İstatistikleri**

| Alan | Açıklama | Endpoint | Örnek Değer |
|------|----------|----------|-------------|
| `passes_successful` | Başarılı paslar | `/sport_events/{id}/extended_summary` | `45` |
| `passes_total` | Toplam paslar | `/sport_events/{id}/extended_summary` | `52` |
| `passes_accuracy` | Pas başarı oranı (%) | `/sport_events/{id}/extended_summary` | `86.5` |
| `long_passes_successful` | Başarılı uzun paslar | `/sport_events/{id}/extended_summary` | `8` |
| `long_passes_total` | Toplam uzun paslar | `/sport_events/{id}/extended_summary` | `12` |
| `key_passes` | Kilit paslar | `/sport_events/{id}/extended_summary` | `3` |

### 🛡️ **Savunma İstatistikleri**

| Alan | Açıklama | Endpoint | Örnek Değer |
|------|----------|----------|-------------|
| `tackles_successful` | Başarılı müdahaleler | `/sport_events/{id}/extended_summary` | `5` |
| `tackles_total` | Toplam müdahale denemesi | `/sport_events/{id}/extended_summary` | `7` |
| `interceptions` | Araya girmeler | `/sport_events/{id}/extended_summary` | `4` |
| `blocks` | Bloklar | `/sport_events/{id}/extended_summary` | `2` |
| `clearances` | Uzaklaştırmalar | `/sport_events/{id}/extended_summary` | `6` |

### ⚽ **Şut İstatistikleri**

| Alan | Açıklama | Endpoint | Örnek Değer |
|------|----------|----------|-------------|
| `shots_total` | Toplam şutlar | `/sport_events/{id}/extended_summary` | `4` |
| `shots_on_target` | İsabetli şutlar | `/sport_events/{id}/extended_summary` | `2` |
| `shots_off_target` | Iskaladığı şutlar | `/sport_events/{id}/extended_summary` | `2` |
| `shots_blocked` | Bloke edilen şutlar | `/sport_events/{id}/extended_summary` | `1` |
| `shots_inside_box` | Ceza sahası içi şutlar | `/sport_events/{id}/extended_summary` | `3` |
| `shots_outside_box` | Ceza sahası dışı şutlar | `/sport_events/{id}/extended_summary` | `1` |

### 🥅 **Kaleci İstatistikleri**

| Alan | Açıklama | Endpoint | Örnek Değer |
|------|----------|----------|-------------|
| `saves` | Kurtarışlar | `/sport_events/{id}/extended_summary` | `6` |
| `diving_saves` | Dalarak kurtarışlar | `/sport_events/{id}/extended_summary` | `3` |
| `punches` | Yumruklamalar | `/sport_events/{id}/extended_summary` | `2` |
| `high_claims` | Yüksek top alımları | `/sport_events/{id}/extended_summary` | `4` |
| `distribution_accuracy` | Dağıtım başarı oranı | `/sport_events/{id}/extended_summary` | `78.5` |

---

## 🏟️ Stadyum Bilgileri - Ekstra Veriler

### 📍 **Detaylı Venue Bilgileri**

| Alan | Açıklama | Endpoint | Örnek Değer |
|------|----------|----------|-------------|
| `capacity` | Stadyum kapasitesi | `/competitors/{id}/profile` | `60000` |
| `city_name` | Şehir adı | `/competitors/{id}/profile` | `"Manchester"` |
| `country_name` | Ülke adı | `/competitors/{id}/profile` | `"England"` |
| `country_code` | Ülke kodu | `/competitors/{id}/profile` | `"ENG"` |
| `map_coordinates` | Harita koordinatları | `/competitors/{id}/profile` | `"53.4631,-2.2914"` |
| `timezone` | Saat dilimi | `/competitors/{id}/profile` | `"Europe/London"` |
| `reduced_capacity` | Azaltılmış kapasite var mı | `/competitors/{id}/profile` | `false` |
| `reduced_capacity_max` | Azaltılmış kapasite miktarı | `/competitors/{id}/profile` | `45000` |
| `changed` | Stadyum değişti mi | `/competitors/{id}/profile` | `false` |

---

## 👕 Takım Bilgileri - Ekstra Veriler

### 🎨 **Forma Bilgileri**

| Alan | Açıklama | Endpoint | Örnek Değer |
|------|----------|----------|-------------|
| `jerseys[].type` | Forma tipi | `/competitors/{id}/profile` | `"home"/"away"/"third"` |
| `jerseys[].base` | Ana renk | `/competitors/{id}/profile` | `"#FF0000"` |
| `jerseys[].sleeve` | Kol rengi | `/competitors/{id}/profile` | `"#FFFFFF"` |
| `jerseys[].number` | Numara rengi | `/competitors/{id}/profile` | `"#FFFFFF"` |
| `jerseys[].shorts` | Şort rengi | `/competitors/{id}/profile` | `"#000000"` |
| `jerseys[].socks` | Çorap rengi | `/competitors/{id}/profile` | `"#FF0000"` |
| `jerseys[].horizontal_stripes` | Yatay çizgiler | `/competitors/{id}/profile` | `false` |
| `jerseys[].vertical_stripes` | Dikey çizgiler | `/competitors/{id}/profile` | `false` |
| `jerseys[].squares` | Kareli desen | `/competitors/{id}/profile` | `false` |

### 🏆 **Takım Meta Bilgileri**

| Alan | Açıklama | Endpoint | Örnek Değer |
|------|----------|----------|-------------|
| `age_group` | Yaş grubu | `/competitors/{id}/profile` | `"U21"/"Senior"` |
| `gender` | Cinsiyet | `/competitors/{id}/profile` | `"male"/"female"` |
| `virtual` | Sanal takım mı | `/competitors/{id}/profile` | `false` |
| `form` | Son form durumu | `/competitors/{id}/profile` | `"WWLDW"` |
| `qualifier` | Takım niteleyicisi | `/competitors/{id}/profile` | `"home"/"away"` |

---

## 👤 Oyuncu Bilgileri - Ekstra Veriler

### 📋 **Detaylı Kişisel Bilgiler**

| Alan | Açıklama | Endpoint | Örnek Değer |
|------|----------|----------|-------------|
| `first_name` | Ad | `/seasons/{id}/competitors/{id}/players` | `"Cristiano"` |
| `last_name` | Soyad | `/seasons/{id}/competitors/{id}/players` | `"Ronaldo"` |
| `display_first_name` | Görünen ad | `/seasons/{id}/competitors/{id}/players` | `"Cristiano"` |
| `display_last_name` | Görünen soyad | `/seasons/{id}/competitors/{id}/players` | `"Ronaldo"` |
| `nickname` | Lakap | `/players/{id}/profile` | `"CR7"` |
| `place_of_birth` | Doğum yeri | `/players/{id}/profile` | `"Funchal, Madeira"` |
| `nationality` | Uyruk | `/players/{id}/profile` | `"Portugal"` |
| `country_code` | Ülke kodu | `/players/{id}/profile` | `"POR"` |
| `gender` | Cinsiyet | `/players/{id}/profile` | `"male"` |

### 🏃‍♂️ **Fiziksel Özellikler**

| Alan | Açıklama | Endpoint | Örnek Değer |
|------|----------|----------|-------------|
| `height` | Boy (cm) | `/players/{id}/profile` | `187` |
| `weight` | Kilo (kg) | `/seasons/{id}/competitors/{id}/players` | `84` |
| `preferred_foot` | Tercih edilen ayak | `/players/{id}/profile` | `"right"/"left"/"both"` |
| `type` | Pozisyon tipi | `/players/{id}/profile` | `"forward"/"midfielder"/"defender"/"goalkeeper"` |

### 📅 **Kariyer Bilgileri**

| Alan | Açıklama | Endpoint | Örnek Değer |
|------|----------|----------|-------------|
| `roles[].active` | Aktif mi | `/players/{id}/profile` | `true` |
| `roles[].start_date` | Başlangıç tarihi | `/players/{id}/profile` | `"2021-08-31 00:00:00"` |
| `roles[].end_date` | Bitiş tarihi | `/players/{id}/profile` | `"2024-06-30 00:00:00"` |
| `roles[].jersey_number` | Forma numarası | `/players/{id}/profile` | `7` |
| `roles[].type` | Pozisyon | `/players/{id}/profile` | `"forward"` |

---

## 🏆 Lig ve Sezon Bilgileri - Ekstra Veriler

### 📊 **Sezon Detayları**

| Alan | Açıklama | Endpoint | Örnek Değer |
|------|----------|----------|-------------|
| `start_date` | Sezon başlangıcı | `/seasons/{id}` | `"2023-08-12"` |
| `end_date` | Sezon bitişi | `/seasons/{id}` | `"2024-05-26"` |
| `year` | Sezon yılı | `/seasons/{id}` | `"23/24"` |
| `competition_id` | Lig ID'si | `/seasons/{id}` | `"sr:competition:17"` |
| `disabled` | Devre dışı mı | `/seasons/{id}` | `false` |

### 🏅 **Lig Hiyerarşisi**

| Alan | Açıklama | Endpoint | Örnek Değer |
|------|----------|----------|-------------|
| `competition.parent_id` | Üst lig ID'si | `/competitions/{id}/info` | `"sr:competition:1"` |
| `competition.type` | Lig tipi | `/competitions/{id}/info` | `"league"/"cup"` |
| `category.id` | Kategori ID'si | `/competitions/{id}/info` | `"sr:category:1"` |
| `category.name` | Ülke/Kategori adı | `/competitions/{id}/info` | `"England"` |
| `category.country_code` | Ülke kodu | `/competitions/{id}/info` | `"ENG"` |

---

## 📈 Puan Durumu - Ekstra Veriler

### 🏆 **Detaylı Sıralama Bilgileri**

| Alan | Açıklama | Endpoint | Örnek Değer |
|------|----------|----------|-------------|
| `change` | Sıralama değişimi | `/seasons/{id}/standings` | `+2/-1/0` |
| `current_outcome` | Mevcut sonuç | `/seasons/{id}/standings` | `"promotion"/"relegation"` |
| `goals_diff` | Averaj | `/seasons/{id}/standings` | `+15` |
| `form` | Son 5 maç formu | `/seasons/{id}/standings` | `"WWLDW"` |
| `comments[].text` | Açıklamalar | `/seasons/{id}/standings` | `"Promotion to Premier League"` |

---

## 🎮 Canlı Maç Verileri - Ekstra Veriler

### ⚡ **Gerçek Zamanlı Bilgiler**

| Alan | Açıklama | Endpoint | Örnek Değer |
|------|----------|----------|-------------|
| `match_time` | Maç dakikası | `/sport_events/{id}/timeline` | `45` |
| `stoppage_time` | Ek süre | `/sport_events/{id}/timeline` | `3` |
| `injury_time_announced` | Açıklanan ek süre | `/sport_events/{id}/timeline` | `4` |
| `remaining_time` | Kalan süre | `/sport_events/{id}/timeline` | `"00:02:30"` |
| `remaining_time_in_period` | Devredeki kalan süre | `/sport_events/{id}/timeline` | `"00:02:30"` |

### 📍 **Olay Koordinatları**

| Alan | Açıklama | Endpoint | Örnek Değer |
|------|----------|----------|-------------|
| `x` | X koordinatı | `/sport_events/{id}/extended_timeline` | `85` |
| `y` | Y koordinatı | `/sport_events/{id}/extended_timeline` | `45` |
| `goalface_x` | Kale yüzü X | `/sport_events/{id}/extended_timeline` | `12` |
| `goalface_y` | Kale yüzü Y | `/sport_events/{id}/extended_timeline` | `8` |
| `distance` | Mesafe | `/sport_events/{id}/extended_timeline` | `18` |

---

## 🤖 AI Destekli İçerik

### 📝 **Otomatik Metin İçeriği**

| Alan | Açıklama | Endpoint | Örnek Değer |
|------|----------|----------|-------------|
| `commentaries[].text` | Canlı yorum | `/sport_events/{id}/timeline` | `"Great save by the goalkeeper!"` |
| `fun_facts[].statement` | Eğlenceli bilgiler | `/sport_events/{id}/fun_facts` | `"This is the 100th meeting between these teams"` |

### 📊 **Otomatik Analizler**

- Maç öncesi tahminler
- Devre arası özetler  
- Maç sonu analizler
- Performans karşılaştırmaları

---

## 🎯 Kullanım Önerileri

### 🚀 **Öncelikli Ekstra Veriler**

1. **Hava durumu bilgileri** - Kullanıcı deneyimini artırır
2. **Forma renkleri** - Görsel zenginlik sağlar
3. **Oyuncu fiziksel özellikleri** - Detaylı profiller
4. **Gelişmiş istatistikler** - Analiz kapasitesi
5. **Canlı koordinatlar** - İnteraktif deneyim

### 💡 **Geliştirme Fırsatları**

- **Heatmap görselleştirmeleri** (koordinat verileri ile)
- **Performans radarları** (gelişmiş istatistikler ile)
- **Takım karşılaştırma araçları**
- **Oyuncu scouting modülleri**
- **Canlı maç takip araçları**

Bu ekstra veriler uygulamanızı rakiplerinden ayıracak ve kullanıcılarınıza benzersiz bir deneyim sunacaktır.

---

## 🔄 Transfer Bilgileri - Ekstra Veriler

### 💰 **Transfer Detayları**

| Alan | Açıklama | Endpoint | Örnek Değer |
|------|----------|----------|-------------|
| `transfer_date` | Transfer tarihi | `/seasons/{id}/transfers` | `"2023-08-15"` |
| `from_competitor` | Eski takım | `/seasons/{id}/transfers` | `"Real Madrid"` |
| `to_competitor` | Yeni takım | `/seasons/{id}/transfers` | `"Al Nassr"` |
| `role_type` | Pozisyon tipi | `/seasons/{id}/transfers` | `"forward"` |
| `competitors[].name` | Takım adları | `/seasons/{id}/transfers` | `"Manchester United"` |

---

## 🏥 Sakatlık Takibi - Ekstra Veriler

### 🚑 **Missing Players Bilgileri**

| Alan | Açıklama | Endpoint | Örnek Değer |
|------|----------|----------|-------------|
| `reason` | Eksiklik sebebi | `/seasons/{id}/missing_players` | `"injured"/"suspended"/"on_loan"/"other"` |
| `status` | Durum | `/seasons/{id}/missing_players` | `"missing"/"doubtful"/"other"` |
| `start_date` | Başlangıç tarihi | `/seasons/{id}/missing_players` | `"2024-03-01T05:56:33+00:00"` |
| `competitor.name` | Takım adı | `/seasons/{id}/missing_players` | `"Manchester United"` |
| `competitor.abbreviation` | Takım kısaltması | `/seasons/{id}/missing_players` | `"MUN"` |

---

## 📊 Sezonluk İstatistikler - Ekstra Veriler

### 🏆 **Takım Sezon İstatistikleri**

| Alan | Açıklama | Endpoint | Örnek Değer |
|------|----------|----------|-------------|
| `statistics.goals_for` | Attığı gol | `/seasons/{id}/competitors/{id}/statistics` | `85` |
| `statistics.goals_against` | Yediği gol | `/seasons/{id}/competitors/{id}/statistics` | `32` |
| `statistics.wins` | Galibiyet | `/seasons/{id}/competitors/{id}/statistics` | `26` |
| `statistics.draws` | Beraberlik | `/seasons/{id}/competitors/{id}/statistics` | `6` |
| `statistics.losses` | Mağlubiyet | `/seasons/{id}/competitors/{id}/statistics` | `6` |
| `statistics.clean_sheets` | Gol yemediği maç | `/seasons/{id}/competitors/{id}/statistics` | `18` |
| `statistics.failed_to_score` | Gol atamadığı maç | `/seasons/{id}/competitors/{id}/statistics` | `3` |

### ⚽ **Oyuncu Sezon İstatistikleri**

| Alan | Açıklama | Endpoint | Örnek Değer |
|------|----------|----------|-------------|
| `statistics.goals` | Sezon golleri | `/seasons/{id}/competitors/{id}/players` | `28` |
| `statistics.assists` | Sezon asistleri | `/seasons/{id}/competitors/{id}/players` | `12` |
| `statistics.yellow_cards` | Sarı kartlar | `/seasons/{id}/competitors/{id}/players` | `5` |
| `statistics.red_cards` | Kırmızı kartlar | `/seasons/{id}/competitors/{id}/players` | `0` |
| `statistics.appearances` | Maça çıkma | `/seasons/{id}/competitors/{id}/players` | `32` |
| `statistics.minutes_played` | Oynanan dakika | `/seasons/{id}/competitors/{id}/players` | `2850` |

---

## 🎲 Bahis ve Olasılık Verileri

### 📈 **Maç Olasılıkları**

| Alan | Açıklama | Endpoint | Örnek Değer |
|------|----------|----------|-------------|
| `markets[].outcomes[].name` | Sonuç tipi | `/sport_events/{id}/probabilities` | `"1"/"X"/"2"` |
| `markets[].outcomes[].probability` | Olasılık | `/sport_events/{id}/probabilities` | `0.45` |
| `markets[].outcomes[].odds` | Oran | `/sport_events/{id}/probabilities` | `2.22` |
| `markets[].name` | Bahis tipi | `/sport_events/{id}/probabilities` | `"3way"/"totals"` |

---

## 🏟️ Maç Kadroları - Ekstra Veriler

### 👥 **Detaylı Kadro Bilgileri**

| Alan | Açıklama | Endpoint | Örnek Değer |
|------|----------|----------|-------------|
| `lineups[].players[].starter` | İlk 11'de mi | `/sport_events/{id}/lineups` | `true/false` |
| `lineups[].players[].played` | Oynadı mı | `/sport_events/{id}/lineups` | `true/false` |
| `lineups[].players[].order` | Sıralama | `/sport_events/{id}/lineups` | `1-11` |
| `lineups[].players[].jersey_number` | Forma numarası | `/sport_events/{id}/lineups` | `10` |
| `lineups[].formation` | Diziliş | `/sport_events/{id}/lineups` | `"4-3-3"` |

### 👨‍💼 **Teknik Kadro**

| Alan | Açıklama | Endpoint | Örnek Değer |
|------|----------|----------|-------------|
| `manager.name` | Teknik direktör | `/competitors/{id}/profile` | `"Pep Guardiola"` |
| `manager.nationality` | Uyruk | `/competitors/{id}/profile` | `"Spain"` |
| `manager.country_code` | Ülke kodu | `/competitors/{id}/profile` | `"ESP"` |
| `manager.date_of_birth` | Doğum tarihi | `/competitors/{id}/profile` | `"1971-01-18"` |

---

## 🎯 Timeline Olayları - Ekstra Veriler

### ⚽ **Gol Detayları**

| Alan | Açıklama | Endpoint | Örnek Değer |
|------|----------|----------|-------------|
| `type` | Olay tipi | `/sport_events/{id}/timeline` | `"goal"/"penalty_goal"/"own_goal"` |
| `method` | Gol şekli | `/sport_events/{id}/timeline` | `"header"/"right_foot"/"left_foot"` |
| `goal_scorer.name` | Golcü | `/sport_events/{id}/timeline` | `"Lionel Messi"` |
| `assist.name` | Asist yapan | `/sport_events/{id}/timeline` | `"Jordi Alba"` |
| `home_score` | Ev sahibi skoru | `/sport_events/{id}/timeline` | `2` |
| `away_score` | Deplasman skoru | `/sport_events/{id}/timeline` | `1` |

### 🟨 **Kart Detayları**

| Alan | Açıklama | Endpoint | Örnek Değer |
|------|----------|----------|-------------|
| `type` | Kart tipi | `/sport_events/{id}/timeline` | `"yellow_card"/"red_card"/"yellow_red_card"` |
| `card_type` | Kart sebebi | `/sport_events/{id}/timeline` | `"unsporting_behaviour"/"dissent"` |
| `player.name` | Kartı alan oyuncu | `/sport_events/{id}/timeline` | `"Sergio Ramos"` |
| `reason` | Sebep | `/sport_events/{id}/timeline` | `"Foul"` |

### 🔄 **Oyuncu Değişikliği Detayları**

| Alan | Açıklama | Endpoint | Örnek Değer |
|------|----------|----------|-------------|
| `type` | Olay tipi | `/sport_events/{id}/timeline` | `"substitution"` |
| `player_in.name` | Giren oyuncu | `/sport_events/{id}/timeline` | `"Kylian Mbappe"` |
| `player_out.name` | Çıkan oyuncu | `/sport_events/{id}/timeline` | `"Neymar Jr"` |
| `substitution_type` | Değişiklik tipi | `/sport_events/{id}/timeline` | `"tactical"/"injury"` |

---

## 🏆 Liderlik Tabloları - Ekstra Veriler

### 👑 **Sezon Liderleri**

| Alan | Açıklama | Endpoint | Örnek Değer |
|------|----------|----------|-------------|
| `leaders[].player.name` | Oyuncu adı | `/seasons/{id}/leaders` | `"Erling Haaland"` |
| `leaders[].datapoints[].type` | İstatistik tipi | `/seasons/{id}/leaders` | `"goals"/"assists"/"cards"` |
| `leaders[].datapoints[].value` | Değer | `/seasons/{id}/leaders` | `36` |
| `leaders[].multiple_competitors` | Çoklu takım | `/seasons/{id}/leaders` | `false` |

---

## 📱 Mobil Uygulama İçin Özel Veriler

### 🔔 **Push Notification Verileri**

| Alan | Açıklama | Endpoint | Örnek Değer |
|------|----------|----------|-------------|
| `priority` | Öncelik | Push Feeds | `"high"/"medium"/"low"` |
| `event_type` | Olay tipi | Push Feeds | `"goal"/"card"/"substitution"` |
| `message` | Mesaj | Push Feeds | `"GOAL! Messi scores for PSG"` |

### 📊 **Widget Verileri**

| Alan | Açıklama | Endpoint | Örnek Değer |
|------|----------|----------|-------------|
| `mini_match.status` | Mini maç durumu | Live Feeds | `"live"/"finished"` |
| `mini_match.minute` | Dakika | Live Feeds | `67` |
| `mini_match.score` | Skor | Live Feeds | `"2-1"` |

---

## 🎮 Gelişmiş Analitik Veriler

### 📈 **xG (Expected Goals) Verileri**

| Alan | Açıklama | Endpoint | Örnek Değer |
|------|----------|----------|-------------|
| `expected_goals` | Beklenen gol | Extended Timeline | `1.8` |
| `shot_quality` | Şut kalitesi | Extended Timeline | `0.3` |
| `big_chances` | Büyük fırsatlar | Extended Timeline | `3` |

### 🏃‍♂️ **Fiziksel Performans**

| Alan | Açıklama | Endpoint | Örnek Değer |
|------|----------|----------|-------------|
| `distance_covered` | Kat edilen mesafe | Extended Summary | `11.2` |
| `sprints` | Sprint sayısı | Extended Summary | `15` |
| `top_speed` | En yüksek hız | Extended Summary | `32.5` |

---

## 🌍 Çoklu Dil Desteği

### 🗣️ **Dil Seçenekleri**

- `en` - İngilizce
- `de` - Almanca
- `es` - İspanyolca
- `fr` - Fransızca
- `it` - İtalyanca
- `pt` - Portekizce
- `tr` - Türkçe
- `ar` - Arapça
- `zh` - Çince
- `ja` - Japonca

### 📝 **Çeviri Örnekleri**

| İngilizce | Türkçe | Almanca | İspanyolca |
|-----------|--------|---------|------------|
| `"Goal"` | `"Gol"` | `"Tor"` | `"Gol"` |
| `"Yellow Card"` | `"Sarı Kart"` | `"Gelbe Karte"` | `"Tarjeta Amarilla"` |
| `"Substitution"` | `"Oyuncu Değişikliği"` | `"Auswechslung"` | `"Sustitución"` |

Bu kapsamlı ekstra veri seti ile uygulamanız dünya standartlarında bir futbol platformu haline gelebilir!
