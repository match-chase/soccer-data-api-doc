# Maç Verileri Tabloları

Bu bölümde maç, venue ve maç detay olaylarının migration mapping'i yer almaktadır.

## 1. Fixture Tablosu

### Eski Tablo Yapısı

| Kolon | Tip | Açıklama | Zorunlu |
|-------|-----|----------|---------|
| `id` | UUID | Primary Key | ✅ |
| `name` | String | Maç adı | ✅ |
| `leagueId` | UUID | Lig referansı | ✅ |
| `homeTeamId` | UUID | Ev sahibi takım | ✅ |
| `awayTeamId` | UUID | Deplasman takımı | ✅ |
| `matchDate` | Timestamp | Maç tarihi | ❌ |
| `year` | Integer | Sezon yılı | ✅ |
| `round` | Integer | Tur numarası | ✅ |
| `status` | Integer | Maç durumu | ✅ |

### Yeni API Mapping

| Eski Kolon | Yeni API Alanı | Endpoint | Durum |
|------------|----------------|----------|-------|
| `name` | - | - | ❌ |
| `leagueId` | `sport_event_context.competition.id` | `/sport_events/{id}/summary` | ✅ |
| `homeTeamId` | `sport_event.competitors[0].id` | `/sport_events/{id}/summary` | ✅ |
| `awayTeamId` | `sport_event.competitors[1].id` | `/sport_events/{id}/summary` | ✅ |
| `matchDate` | `sport_event.start_time` | `/sport_events/{id}/summary` | ✅ |
| `year` | `sport_event_context.season.year` | `/sport_events/{id}/summary` | ✅ |
| `round` | `sport_event_context.round.number` | `/sport_events/{id}/summary` | ✅ |
| `status` | `sport_event_status.status` | `/sport_events/{id}/summary` | ✅ |

**Durum:** ✅ Temel bilgiler karşılanabilir

---

## 2. Match Tablosu

### Eski Tablo Yapısı

| Kolon | Tip | Açıklama | Zorunlu |
|-------|-----|----------|---------|
| `id` | UUID | Primary Key | ✅ |
| `fixtureId` | UUID | Fixture referansı (Unique) | ✅ |
| `homeTeamGoals` | Integer | Ev sahibi golleri | ✅ |
| `awayTeamGoals` | Integer | Deplasman golleri | ✅ |
| `homeTeamPosition` | Integer | Ev sahibi sıralaması | ❌ |
| `awayTeamPosition` | Integer | Deplasman sıralaması | ❌ |
| `homeStartingLineUp` | String | Ev sahibi 11'i | ❌ |
| `awayStartingLineUp` | String | Deplasman 11'i | ❌ |
| `attendance` | Integer | Seyirci sayısı | ❌ |
| `firstHalfResult` | String | İlk yarı sonucu | ❌ |
| `status` | Integer | Maç durumu | ✅ |
| `venueId` | UUID | Venue referansı | ❌ |
| `homeTeamManagerId` | UUID | Ev sahibi teknik direktör | ❌ |
| `awayTeamManagerId` | UUID | Deplasman teknik direktör | ❌ |
| **İstatistikler** | | | |
| `foulsHome/Away` | Integer | Faul sayıları | ❌ |
| `cornersHome/Away` | Integer | Korner sayıları | ❌ |
| `shotsOnTargetHome/Away` | Integer | İsabetli şut sayıları | ❌ |
| `possessionHome/Away` | Numeric | Top hakimiyeti | ❌ |

### Yeni API Mapping

| Eski Kolon | Yeni API Alanı | Endpoint | Durum |
|------------|----------------|----------|-------|
| `homeTeamGoals` | `sport_event_status.home_score` | `/sport_events/{id}/summary` | ✅ |
| `awayTeamGoals` | `sport_event_status.away_score` | `/sport_events/{id}/summary` | ✅ |
| `homeTeamPosition` | Bunu Hesaplayabiliriz | - | ❌ |
| `awayTeamPosition` | Bunu Hesaplayabiliriz | - | ❌ |
| `homeStartingLineUp` | Lineup data | `/sport_events/{id}/lineups` | ✅ |
| `awayStartingLineUp` | Lineup data | `/sport_events/{id}/lineups` | ✅ |
| `attendance` | `sport_event.attendance` | `/sport_events/{id}/summary` | ✅ |
| `firstHalfResult` | `sport_event_status.period_scores[0]` | `/sport_events/{id}/summary` | ✅ |
| `status` | `sport_event_status.status` | `/sport_events/{id}/summary` | ✅ |
| `venueId` | `sport_event.venue.id` | `/sport_events/{id}/summary` | ✅ |
| `homeTeamManagerId` | `lineups[0].manager.id` | `/sport_events/{id}/lineups` | ✅ |
| `awayTeamManagerId` | `lineups[1].manager.id` | `/sport_events/{id}/lineups` | ✅ |
| `foulsHome/Away` | `statistics.totals[].competitors[].fouls` | `/sport_events/{id}/summary` | ✅ |
| `cornersHome/Away` | `statistics.totals[].competitors[].corner_kicks` | `/sport_events/{id}/summary` | ✅ |
| `shotsOnTargetHome/Away` | `statistics.totals[].competitors[].shots_on_target` | `/sport_events/{id}/summary` | ✅ |
| `possessionHome/Away` | `statistics.totals[].competitors[].ball_possession` | `/sport_events/{id}/summary` | ✅ |

**Durum:** ✅ Çoğu bilgi karşılanabilir, takım sıralaması eksik

---

## 3. Venue Tablosu

### Eski Tablo Yapısı

| Kolon | Tip | Açıklama | Zorunlu |
|-------|-----|----------|---------|
| `id` | UUID | Primary Key | ✅ |
| `name` | String | Venue adı (Unique) | ✅ |
| `capacity` | Integer | Kapasite | ❌ |
| `city` | String | Şehir | ✅ |
| `surface` | String | Zemin tipi (default: 'grass') | ❌ |
| `teamId` | UUID | Ev sahibi takım | ❌ |

### Yeni API Mapping

| Eski Kolon | Yeni API Alanı | Endpoint | Durum |
|------------|----------------|----------|-------|
| `name` | `venue.name` | Sport event içinde | ✅ |
| `capacity` | `venue.capacity` | Sport event içinde | ✅ |
| `city` | `venue.city_name` | Sport event içinde | ✅ |
| `surface` | - | - | ❌ |
| `teamId` | - | - | ❌ |

**Durum:** ⚠️ Temel bilgiler var, zemin ve ev sahibi takım bilgisi eksik

---

## 4. Match Goal Tablosu

### Eski Tablo Yapısı

| Kolon | Tip | Açıklama | Zorunlu |
|-------|-----|----------|---------|
| `id` | UUID | Primary Key | ✅ |
| `matchId` | UUID | Maç referansı | ✅ |
| `teamId` | UUID | Takım referansı | ✅ |
| `scorerId` | UUID | Golcü referansı | ✅ |
| `assistId` | UUID | Asist yapan referansı | ❌ |
| `side` | String | Hangi takım (home/away) | ✅ |
| `score` | String | O anki skor | ✅ |
| `goalTime` | Integer | Gol dakikası | ✅ |
| `goalTimeExtra` | Integer | Ek süre | ✅ |
| `isOwnGoal` | Boolean | Kendi kalesine mi | ✅ |

### Yeni API Mapping

| Eski Kolon | Yeni API Alanı | Endpoint | Durum |
|------------|----------------|----------|-------|
| `matchId` | Sport event ID | `/sport_events/{id}/timeline` | ✅ |
| `teamId` | `timeline_event.competitor` | `/sport_events/{id}/timeline` | ✅ |
| `scorerId` | `timeline_event.player.id` | `/sport_events/{id}/timeline` | ✅ |
| `assistId` | `timeline_event.assist.id` | `/sport_events/{id}/timeline` | ✅ |
| `side` | `timeline_event.competitor` | `/sport_events/{id}/timeline` | ✅ |
| `score` | `timeline_event.home_score`, `away_score` | `/sport_events/{id}/timeline` | ✅ |
| `goalTime` | `timeline_event.match_time` | `/sport_events/{id}/timeline` | ✅ |
| `goalTimeExtra` | - | - | ❌ |
| `isOwnGoal` | `timeline_event.outcome` | `/sport_events/{id}/timeline` | ✅ |

**Durum:** ✅ Çoğu bilgi karşılanabilir, ek süre ayrımı eksik

---

## 5. Match Card Tablosu

### Eski Tablo Yapısı

| Kolon | Tip | Açıklama | Zorunlu |
|-------|-----|----------|---------|
| `id` | UUID | Primary Key | ✅ |
| `matchId` | UUID | Maç referansı | ✅ |
| `teamId` | UUID | Takım referansı | ✅ |
| `playerId` | UUID | Oyuncu referansı | ✅ |
| `side` | String | Hangi takım | ✅ |
| `reason` | String | Kart sebebi | ❌ |
| `cardTime` | Integer | Kart dakikası | ✅ |
| `cardTimeExtra` | Integer | Ek süre | ✅ |
| `cardType` | Integer | Kart tipi (1:Sarı, 2:Kırmızı, 3:İkinci sarı) | ✅ |

### Yeni API Mapping

| Eski Kolon | Yeni API Alanı | Endpoint | Durum |
|------------|----------------|----------|-------|
| `matchId` | Sport event ID | `/sport_events/{id}/timeline` | ✅ |
| `teamId` | `timeline_event.competitor` | `/sport_events/{id}/timeline` | ✅ |
| `playerId` | `timeline_event.player.id` | `/sport_events/{id}/timeline` | ✅ |
| `side` | `timeline_event.competitor` | `/sport_events/{id}/timeline` | ✅ |
| `reason` | `timeline_event.reason` | `/sport_events/{id}/timeline` | ✅ |
| `cardTime` | `timeline_event.match_time` | `/sport_events/{id}/timeline` | ✅ |
| `cardTimeExtra` | - | - | ❌ |
| `cardType` | `timeline_event.type` | `/sport_events/{id}/timeline` | ✅ |

**Durum:** ✅ Çoğu bilgi karşılanabilir, ek süre ayrımı eksik

---

## 6. Match Substitution Tablosu

### Eski Tablo Yapısı

| Kolon | Tip | Açıklama | Zorunlu |
|-------|-----|----------|---------|
| `id` | UUID | Primary Key | ✅ |
| `matchId` | UUID | Maç referansı | ✅ |
| `teamId` | UUID | Takım referansı | ✅ |
| `playerInId` | UUID | Giren oyuncu | ✅ |
| `playerOutId` | UUID | Çıkan oyuncu | ✅ |
| `side` | String | Hangi takım (home/away) | ✅ |
| `substitutionTime` | Integer | Değişiklik dakikası | ✅ |
| `substitutionTimeExtra` | Integer | Ek süre | ❌ |

### Yeni API Mapping

| Eski Kolon | Yeni API Alanı | Endpoint | Durum |
|------------|----------------|----------|-------|
| `matchId` | Sport event ID | `/sport_events/{id}/timeline` | ✅ |
| `teamId` | `timeline_event.competitor` | `/sport_events/{id}/timeline` | ✅ |
| `playerInId` | `timeline_event.player.id` | `/sport_events/{id}/timeline` | ✅ |
| `playerOutId` | `timeline_event.player_out.id` | `/sport_events/{id}/timeline` | ✅ |
| `side` | `timeline_event.competitor` | `/sport_events/{id}/timeline` | ✅ |
| `substitutionTime` | `timeline_event.match_time` | `/sport_events/{id}/timeline` | ✅ |
| `substitutionTimeExtra` | - | - | ❌ |

**Durum:** ✅ Oyuncu değişiklikleri timeline'dan alınabilir

---

## 7. Match Referee Tablosu

### Eski Tablo Yapısı

| Kolon | Tip | Açıklama | Zorunlu |
|-------|-----|----------|---------|
| `id` | UUID | Primary Key | ✅ |
| `matchId` | UUID | Maç referansı | ✅ |
| `refereeId` | UUID | Hakem referansı | ✅ |
| `refereeType` | String | Hakem tipi (main/assistant) | ✅ |

### Yeni API Mapping

| Eski Kolon | Yeni API Alanı | Endpoint | Durum |
|------------|----------------|----------|-------|
| `matchId` | Sport event ID | `/sport_events/{id}/summary` | ✅ |
| `refereeId` | `sport_event.officials[].id` | `/sport_events/{id}/summary` | ✅ |
| `refereeType` | `sport_event.officials[].type` | `/sport_events/{id}/summary` | ✅ |

**Durum:** ✅ Hakem bilgileri summary'den alınabilir

---

## 8. Match Sanction Tablosu

### Eski Tablo Yapısı

| Kolon | Tip | Açıklama | Zorunlu |
|-------|-----|----------|---------|
| `id` | UUID | Primary Key | ✅ |
| `matchId` | UUID | Maç referansı | ✅ |
| `teamId` | UUID | Takım referansı | ✅ |
| `playerId` | UUID | Oyuncu referansı | ❌ |
| `sanctionType` | String | Ceza tipi | ✅ |
| `reason` | String | Ceza sebebi | ❌ |
| `sanctionTime` | Integer | Ceza dakikası | ✅ |

### Yeni API Mapping

| Eski Kolon | Yeni API Alanı | Endpoint | Durum |
|------------|----------------|----------|-------|
| `matchId` | Sport event ID | `/sport_events/{id}/timeline` | ✅ |
| `teamId` | `timeline_event.competitor` | `/sport_events/{id}/timeline` | ✅ |
| `playerId` | `timeline_event.player.id` | `/sport_events/{id}/timeline` | ✅ |
| `sanctionType` | `timeline_event.type` | `/sport_events/{id}/timeline` | ✅ |
| `reason` | `timeline_event.reason` | `/sport_events/{id}/timeline` | ⚠️ |
| `sanctionTime` | `timeline_event.match_time` | `/sport_events/{id}/timeline` | ✅ |

**Durum:** ✅ Ceza bilgileri timeline'dan alınabilir

---

## 9. Match Penalty Tablosu

### Eski Tablo Yapısı

| Kolon | Tip | Açıklama | Zorunlu |
|-------|-----|----------|---------|
| `id` | UUID | Primary Key | ✅ |
| `matchId` | UUID | Maç referansı | ✅ |
| `teamId` | UUID | Takım referansı | ✅ |
| `playerId` | UUID | Penaltı kullanan oyuncu | ✅ |
| `side` | String | Hangi takım (home/away) | ✅ |
| `penaltyTime` | Integer | Penaltı dakikası | ✅ |
| `penaltyTimeExtra` | Integer | Ek süre | ❌ |
| `isScored` | Boolean | Gol oldu mu | ✅ |
| `penaltyReason` | String | Penaltı sebebi | ❌ |

### Yeni API Mapping

| Eski Kolon | Yeni API Alanı | Endpoint | Durum |
|------------|----------------|----------|-------|
| `matchId` | Sport event ID | `/sport_events/{id}/timeline` | ✅ |
| `teamId` | `timeline_event.competitor` | `/sport_events/{id}/timeline` | ✅ |
| `playerId` | `timeline_event.player.id` | `/sport_events/{id}/timeline` | ✅ |
| `side` | `timeline_event.competitor` | `/sport_events/{id}/timeline` | ✅ |
| `penaltyTime` | `timeline_event.match_time` | `/sport_events/{id}/timeline` | ✅ |
| `penaltyTimeExtra` | - | - | ❌ |
| `isScored` | `timeline_event.type` (penalty_goal/penalty_missed) | `/sport_events/{id}/timeline` | ✅ |
| `penaltyReason` | `timeline_event.reason` | `/sport_events/{id}/timeline` | ⚠️ |

**Durum:** ✅ Penaltı bilgileri timeline'dan alınabilir

---

## Özet

### ✅ Tam Karşılanan Tablolar (7/9)

- **Fixture**: Temel maç bilgileri
- **Match**: Maç sonuçları ve detayları
- **Venue**: Stadyum bilgileri
- **Match Goal**: Gol detayları
- **Match Card**: Kart bilgileri
- **Match Substitution**: Oyuncu değişiklikleri
- **Match Referee**: Hakem bilgileri
- **Match Sanction**: Ceza bilgileri
- **Match Penalty**: Penaltı bilgileri

### ⚠️ Kısmi Karşılanan Tablolar (0/9)

- Hiçbiri

### ❌ Kritik Eksiklikler (0/9)

- Hiçbiri

### 🔧 Öneriler

1. **Timeline API** kullanarak tüm maç olaylarını alın
2. **Summary API** ile temel maç bilgilerini tamamlayın
3. **Lineups API** ile kadro bilgilerini entegre edin
4. **Ek süre bilgileri** için alternatif çözümler geliştirin
