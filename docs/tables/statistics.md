# İstatistik Tabloları

Bu bölümde maç ve oyuncu istatistik tablolarının migration mapping'i yer almaktadır.

## 1. Match Statistic Tablosu

### Eski Tablo Yapısı
| Kolon | Tip | Açıklama | Zorunlu |
|-------|-----|----------|---------|
| `id` | UUID | Primary Key | ✅ |
| `matchId` | UUID | Maç referansı (Unique) | ✅ |
| **Ofsayt İstatistikleri** | | | |
| `offsidesHome` | Integer | Ev sahibi ofsayt | ✅ |
| `offsidesAway` | Integer | Deplasman ofsayt | ✅ |
| **Faul İstatistikleri** | | | |
| `foulsHome` | Integer | Ev sahibi faul | ✅ |
| `foulsAway` | Integer | Deplasman faul | ✅ |
| `freeKicksHome` | Integer | Ev sahibi serbest vuruş | ✅ |
| `freeKicksAway` | Integer | Deplasman serbest vuruş | ✅ |
| **Korner İstatistikleri** | | | |
| `cornersHome` | Integer | Ev sahibi korner | ✅ |
| `cornersAway` | Integer | Deplasman korner | ✅ |
| **Şut İstatistikleri** | | | |
| `shotsSavedHome` | Integer | Ev sahibi kurtarış | ✅ |
| `shotsSavedAway` | Integer | Deplasman kurtarış | ✅ |
| `shotsOffTargetHome` | Integer | Ev sahibi ıskaladığı şut | ✅ |
| `shotsOffTargetAway` | Integer | Deplasman ıskaladığı şut | ✅ |
| `totalShotsHome` | Integer | Ev sahibi toplam şut | ✅ |
| `totalShotsAway` | Integer | Deplasman toplam şut | ✅ |
| **Top Hakimiyeti** | | | |
| `possessionHome` | Integer | Ev sahibi top hakimiyeti | ✅ |
| `possessionAway` | Integer | Deplasman top hakimiyeti | ✅ |
| **Gelişmiş İstatistikler (Extended API)** | | | |
| `chancesCreated` | Integer | Yaratılan fırsatlar | ✅ |
| `crossesSuccessful` | Integer | Başarılı ortalar | ✅ |
| `crossesTotal` | Integer | Toplam ortalar | ✅ |
| `crossesUnsuccessful` | Integer | Başarısız ortalar | ✅ |
| `defensiveBlocks` | Integer | Savunma blokları | ✅ |
| `divingSaves` | Integer | Dalarak kurtarışlar | ✅ |
| `dribblesCompleted` | Integer | Başarılı dribling | ✅ |
| `dribblesTotal` | Integer | Toplam dribling | ✅ |
| `freeKicks` | Integer | Serbest vuruşlar | ✅ |
| `goalKicks` | Integer | Kale vuruşları | ✅ |
| `longPassesSuccessful` | Integer | Başarılı uzun paslar | ✅ |
| `longPassesTotal` | Integer | Toplam uzun paslar | ✅ |
| `longPassesUnsuccessful` | Integer | Başarısız uzun paslar | ✅ |
| `lossOfPossession` | Integer | Top kaybı | ✅ |
| `passesSuccessful` | Integer | Başarılı paslar | ✅ |
| `passesTotal` | Integer | Toplam paslar | ✅ |
| `passesUnsuccessful` | Integer | Başarısız paslar | ✅ |
| `penaltiesMissed` | Integer | Kaçırılan penaltılar | ✅ |
| `shotsSaved` | Integer | Kurtarılan şutlar | ✅ |
| `shotsBlocked` | Integer | Bloke edilen şutlar | ✅ |
| `substitutions` | Integer | Oyuncu değişiklikleri | ✅ |
| `tacklesSuccessful` | Integer | Başarılı müdahaleler | ✅ |
| `tacklesTotal` | Integer | Toplam müdahaleler | ✅ |
| `tacklesUnsuccessful` | Integer | Başarısız müdahaleler | ✅ |
| `throwIns` | Integer | Taç atışları | ✅ |
| `wasFouled` | Integer | Faul çekilme | ✅ |
| **Meta Bilgiler** | | | |

| `isHidden` | Boolean | Gizli mi | ✅ |
| `order` | Integer | Sıralama | ✅ |

### Yeni API Mapping
| Eski Kolon | Yeni API Alanı | Endpoint | Durum |
|------------|----------------|----------|-------|
| `offsidesHome` | `statistics.totals[].competitors[0].offsides` | `/sport_events/{id}/summary` | ✅ |
| `offsidesAway` | `statistics.totals[].competitors[1].offsides` | `/sport_events/{id}/summary` | ✅ |
| `foulsHome` | `statistics.totals[].competitors[0].fouls` | `/sport_events/{id}/summary` | ✅ |
| `foulsAway` | `statistics.totals[].competitors[1].fouls` | `/sport_events/{id}/summary` | ✅ |
| `freeKicksHome` | - | - | ❌ |
| `freeKicksAway` | - | - | ❌ |
| `cornersHome` | `statistics.totals[].competitors[0].corner_kicks` | `/sport_events/{id}/summary` | ✅ |
| `cornersAway` | `statistics.totals[].competitors[1].corner_kicks` | `/sport_events/{id}/summary` | ✅ |
| `shotsSavedHome` | `statistics.totals[].competitors[0].saves` | `/sport_events/{id}/summary` | ✅ |
| `shotsSavedAway` | `statistics.totals[].competitors[1].saves` | `/sport_events/{id}/summary` | ✅ |
| `shotsOffTargetHome` | `statistics.totals[].competitors[0].shots_off_target` | `/sport_events/{id}/summary` | ✅ |
| `shotsOffTargetAway` | `statistics.totals[].competitors[1].shots_off_target` | `/sport_events/{id}/summary` | ✅ |
| `totalShotsHome` | `statistics.totals[].competitors[0].shots_total` | `/sport_events/{id}/summary` | ✅ |
| `totalShotsAway` | `statistics.totals[].competitors[1].shots_total` | `/sport_events/{id}/summary` | ✅ |
| `possessionHome` | `statistics.totals[].competitors[0].ball_possession` | `/sport_events/{id}/summary` | ✅ |
| `possessionAway` | `statistics.totals[].competitors[1].ball_possession` | `/sport_events/{id}/summary` | ✅ |
| **Gelişmiş İstatistikler** | **Extended API'de mevcut** | | |
| `chancesCreated` | `statistics.totals[].competitors[].chances_created` | `/sport_events/{id}/extended_summary` | ✅ |
| `crossesSuccessful` | `statistics.totals[].competitors[].crosses_successful` | `/sport_events/{id}/extended_summary` | ✅ |
| `crossesTotal` | `statistics.totals[].competitors[].crosses_total` | `/sport_events/{id}/extended_summary` | ✅ |
| `defensiveBlocks` | `statistics.totals[].competitors[].defensive_blocks` | `/sport_events/{id}/extended_summary` | ✅ |
| `divingSaves` | `statistics.totals[].competitors[].diving_saves` | `/sport_events/{id}/extended_summary` | ✅ |
| `dribblesCompleted` | `statistics.totals[].competitors[].dribbles_completed` | `/sport_events/{id}/extended_summary` | ✅ |
| `longPassesSuccessful` | `statistics.totals[].competitors[].long_passes_successful` | `/sport_events/{id}/extended_summary` | ✅ |
| `longPassesTotal` | `statistics.totals[].competitors[].long_passes_total` | `/sport_events/{id}/extended_summary` | ✅ |
| `passesSuccessful` | `statistics.totals[].competitors[].passes_successful` | `/sport_events/{id}/extended_summary` | ✅ |
| `passesTotal` | `statistics.totals[].competitors[].passes_total` | `/sport_events/{id}/extended_summary` | ✅ |
| `tacklesSuccessful` | `statistics.totals[].competitors[].tackles_successful` | `/sport_events/{id}/extended_summary` | ✅ |
| `tacklesTotal` | `statistics.totals[].competitors[].tackles_total` | `/sport_events/{id}/extended_summary` | ✅ |

**Durum:** ✅ Temel + gelişmiş maç istatistikleri karşılanabilir (Extended API gerekli)

---

## 2. Player Statistic Tablosu

### Eski Tablo Yapısı
| Kolon | Tip | Açıklama | Zorunlu |
|-------|-----|----------|---------|
| `id` | UUID | Primary Key | ✅ |
| `playerId` | UUID | Oyuncu referansı | ✅ |
| `leagueId` | UUID | Lig referansı | ✅ |
| `teamId` | UUID | Takım referansı | ✅ |
| `year` | Integer | Sezon yılı | ✅ |
| `leagueName` | String | Lig adı | ❌ |
| `teamName` | String | Takım adı | ❌ |
| **Temel İstatistikler** | | | |
| `appearances` | Integer | Maça çıkma | ✅ |
| `minutesPlayed` | Integer | Oynanan dakika | ✅ |
| `goals` | Integer | Gol | ✅ |
| `assists` | Integer | Asist | ✅ |
| `penaltyGoals` | Integer | Penaltı golü | ✅ |
| `ownGoals` | Integer | Kendi kalesine gol | ✅ |
| **Kart İstatistikleri** | | | |
| `yellowCards` | Integer | Sarı kart | ✅ |
| `redCards` | Integer | Kırmızı kart | ✅ |
| `secondYellowCards` | Integer | İkinci sarı kart | ✅ |
| **Değişiklik İstatistikleri** | | | |
| `substitutionsIn` | Integer | Oyuna girme | ✅ |
| `substitutionsOut` | Integer | Oyundan çıkma | ✅ |
| **Gelişmiş Metrikler** | | | |
| `ppg` | Double | Maç başına puan | ✅ |
| `minutesPerGoal` | Integer | Gol başına dakika | ✅ |
| `squadSize` | Integer | Kadro büyüklüğü | ✅ |
| **Extended API'de Mevcut Ek İstatistikler** | | | |
| `aerialDuelsWon` | Integer | Kazanılan hava topu | ✅ |
| `aerialDuelsTotal` | Integer | Toplam hava topu | ✅ |
| `chancesCreated` | Integer | Yaratılan fırsatlar | ✅ |
| `crossesSuccessful` | Integer | Başarılı ortalar | ✅ |
| `crossesTotal` | Integer | Toplam ortalar | ✅ |
| `defensiveActions` | Integer | Savunma aksiyonları | ✅ |
| `dribblesCompleted` | Integer | Başarılı dribling | ✅ |
| `dribblesTotal` | Integer | Toplam dribling | ✅ |
| `duelsWon` | Integer | Kazanılan ikili mücadele | ✅ |
| `duelsTotal` | Integer | Toplam ikili mücadele | ✅ |
| `interceptions` | Integer | Araya girmeler | ✅ |
| `longPassesSuccessful` | Integer | Başarılı uzun paslar | ✅ |
| `longPassesTotal` | Integer | Toplam uzun paslar | ✅ |
| `passesSuccessful` | Integer | Başarılı paslar | ✅ |
| `passesTotal` | Integer | Toplam paslar | ✅ |
| `tacklesSuccessful` | Integer | Başarılı müdahaleler | ✅ |
| `tacklesTotal` | Integer | Toplam müdahaleler | ✅ |
| `touchesInBox` | Integer | Ceza sahasında dokunuş | ✅ |

### Yeni API Mapping
| Eski Kolon | Yeni API Alanı | Endpoint | Durum |
|------------|----------------|----------|-------|
| `appearances` | Maç sayısı hesaplanabilir | Timeline'dan | ⚠️ |
| `minutesPlayed` | - | - | ❌ |
| `goals` | Player statistics | Extended package | ⚠️ |
| `assists` | Player statistics | Extended package | ⚠️ |
| `penaltyGoals` | Timeline'dan hesaplanabilir | `/sport_events/{id}/timeline` | ⚠️ |
| `ownGoals` | Timeline'dan hesaplanabilir | `/sport_events/{id}/timeline` | ⚠️ |
| `yellowCards` | Timeline'dan hesaplanabilir | `/sport_events/{id}/timeline` | ⚠️ |
| `redCards` | Timeline'dan hesaplanabilir | `/sport_events/{id}/timeline` | ⚠️ |
| `substitutionsIn` | Timeline'dan hesaplanabilir | `/sport_events/{id}/timeline` | ⚠️ |
| `substitutionsOut` | Timeline'dan hesaplanabilir | `/sport_events/{id}/timeline` | ⚠️ |
| `ppg` | - | - | ❌ |
| `minutesPerGoal` | - | - | ❌ |
| **Extended API'de Mevcut Ek İstatistikler** | **Player Statistics** | | |
| `aerialDuelsWon` | `statistics.players[].aerial_duels_won` | `/sport_events/{id}/extended_summary` | ✅ |
| `aerialDuelsTotal` | `statistics.players[].aerial_duels_total` | `/sport_events/{id}/extended_summary` | ✅ |
| `chancesCreated` | `statistics.players[].chances_created` | `/sport_events/{id}/extended_summary` | ✅ |
| `crossesSuccessful` | `statistics.players[].crosses_successful` | `/sport_events/{id}/extended_summary` | ✅ |
| `crossesTotal` | `statistics.players[].crosses_total` | `/sport_events/{id}/extended_summary` | ✅ |
| `defensiveActions` | `statistics.players[].defensive_actions` | `/sport_events/{id}/extended_summary` | ✅ |
| `dribblesCompleted` | `statistics.players[].dribbles_completed` | `/sport_events/{id}/extended_summary` | ✅ |
| `duelsWon` | `statistics.players[].duels_won` | `/sport_events/{id}/extended_summary` | ✅ |
| `interceptions` | `statistics.players[].interceptions` | `/sport_events/{id}/extended_summary` | ✅ |
| `passesSuccessful` | `statistics.players[].passes_successful` | `/sport_events/{id}/extended_summary` | ✅ |
| `passesTotal` | `statistics.players[].passes_total` | `/sport_events/{id}/extended_summary` | ✅ |
| `tacklesSuccessful` | `statistics.players[].tackles_successful` | `/sport_events/{id}/extended_summary` | ✅ |
| `touchesInBox` | `statistics.players[].touches_in_box` | `/sport_events/{id}/extended_summary` | ✅ |

**Durum:** ⚠️ Temel istatistikler eksik, ancak Extended API ile çok daha zengin veriler mevcut

---

## 3. Match Player Tablosu (Maç Bazında Oyuncu Performansı)

### Eski Tablo Yapısı
| Kolon | Tip | Açıklama | Zorunlu |
|-------|-----|----------|---------|
| `id` | UUID | Primary Key | ✅ |
| `matchId` | UUID | Maç referansı | ✅ |
| `teamId` | UUID | Takım referansı | ✅ |
| `playerId` | UUID | Oyuncu referansı | ✅ |
| `isCaptaion` | Boolean | Kaptan mı | ❌ |
| `side` | Integer | Hangi takım | ✅ |
| `isSubstitute` | Boolean | Yedek mi | ✅ |
| `isStarting` | Boolean | İlk 11'de mi | ✅ |
| `shirtNumber` | String | Forma numarası | ❌ |
| `position` | String | Pozisyon | ❌ |
| `marketValue` | Integer | Piyasa değeri | ❌ |


### Yeni API Mapping
| Eski Kolon | Yeni API Alanı | Endpoint | Durum |
|------------|----------------|----------|-------|
| `matchId` | Sport event ID | `/sport_events/{id}/lineups` | ✅ |
| `teamId` | Competitor ID | `/sport_events/{id}/lineups` | ✅ |
| `playerId` | `player.id` | `/sport_events/{id}/lineups` | ✅ |
| `isCaptaion` | - | - | ❌ |
| `side` | Competitor qualifier | `/sport_events/{id}/lineups` | ✅ |
| `isSubstitute` | `!player.starter` | `/sport_events/{id}/lineups` | ✅ |
| `isStarting` | `player.starter` | `/sport_events/{id}/lineups` | ✅ |
| `shirtNumber` | `player.jersey_number` | `/sport_events/{id}/lineups` | ✅ |
| `position` | - | - | ❌ |
| `marketValue` | - | - | ❌ |

**Durum:** ⚠️ Temel kadro bilgileri var, performans metrikleri eksik

---

## 🎯 Extended API ile Ek İstatistikler

### 📊 **Yeni Keşfedilen İstatistikler:**

**Match Statistics (Takım Bazında) - 25+ ek alan:**
- `chances_created` - Yaratılan fırsatlar
- `crosses_successful/total` - Orta başarı oranları
- `defensive_blocks` - Savunma blokları
- `diving_saves` - Dalarak kurtarışlar
- `dribbles_completed/total` - Dribling başarı oranları
- `long_passes_successful/total` - Uzun pas başarı oranları
- `passes_successful/total` - Genel pas başarı oranları
- `tackles_successful/total` - Müdahale başarı oranları
- `loss_of_possession` - Top kaybı
- `substitutions` - Oyuncu değişiklikleri
- `throw_ins` - Taç atışları
- `was_fouled` - Faul çekilme

**Player Statistics (Oyuncu Bazında) - 20+ ek alan:**
- `aerial_duels_won/total` - Hava topu mücadelesi
- `chances_created` - Yaratılan fırsatlar
- `crosses_successful/total` - Orta başarı oranları
- `defensive_actions` - Savunma aksiyonları
- `dribbles_completed/total` - Dribling başarı oranları
- `duels_won/total` - İkili mücadele başarısı
- `interceptions` - Araya girmeler
- `long_passes_successful/total` - Uzun pas başarı oranları
- `passes_successful/total` - Genel pas başarı oranları
- `tackles_successful/total` - Müdahale başarı oranları
- `touches_in_box` - Ceza sahasında dokunuş

### 🚀 **Endpoint:**
- **Extended Summary:** `/sport_events/{id}/extended_summary`
- **Premium özellik** - ek ücret gerekebilir

---

## Özet

### ✅ Tam Karşılanan Tablolar (1/3)
- **Match Statistic**: Temel + gelişmiş maç istatistikleri (Extended API ile)

### ⚠️ Kısmi Karşılanan Tablolar (2/3)
- **Player Statistic**: Extended API ile zengin veriler, temel analitikler eksik
- **Match Player**: Kadro bilgileri var, performans eksik

### 🔧 Öneriler
1. **Extended API** kullanarak çok daha detaylı istatistikler elde edin
2. **Timeline API** kullanarak oyuncu performansını hesapla
3. **Piyasa değeri** için alternatif kaynak bul

4. **Premium paket** değerlendirin - çok daha zengin veriler
