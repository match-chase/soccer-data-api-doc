# Transfer ve Kadro Tabloları

Bu bölümde transfer, kadro yönetimi ve oyuncu detay tablolarının migration mapping'i yer almaktadır.

## 1. Player Transfer Tablosu

### Eski Tablo Yapısı
| Kolon | Tip | Açıklama | Zorunlu |
|-------|-----|----------|---------|
| `id` | UUID | Primary Key | ✅ |
| `playerId` | UUID | Oyuncu referansı | ✅ |
| `fromTeamId` | UUID | Eski takım | ❌ |
| `toTeamId` | UUID | Yeni takım | ❌ |
| `startDate` | Date | Başlangıç tarihi | ✅ |
| `endDate` | Date | Bitiş tarihi | ❌ |
| `seasonYear` | Integer | Sezon yılı | ✅ |
| `description` | String | Transfer açıklaması | ❌ |
| `fee` | Integer | Transfer ücreti | ❌ |
| `marketValue` | Integer | Piyasa değeri | ❌ |
| `marketValueCurrency` | String | Piyasa değeri para birimi | ❌ |
| `currency` | String | Transfer ücreti para birimi | ❌ |
| `shirtNumber` | Integer | Forma numarası | ❌ |
| `upcoming` | Boolean | Gelecek transfer mi | ✅ |


### Yeni API Mapping
| Eski Kolon | Yeni API Alanı | Endpoint | Durum |
|------------|----------------|----------|-------|
| `playerId` | `transfer.player.id` | `/seasons/{id}/transfers` | ✅ |
| `fromTeamId` | `transfer.from_competitor.id` | `/seasons/{id}/transfers` | ✅ |
| `toTeamId` | `transfer.to_competitor.id` | `/seasons/{id}/transfers` | ✅ |
| `startDate` | `transfer.transfer_date` | `/seasons/{id}/transfers` | ✅ |
| `endDate` | - | - | ❌ |
| `seasonYear` | Season bilgisinden | `/seasons/{id}/transfers` | ✅ |
| `description` | - | - | ❌ |
| `fee` | - | - | ❌ |
| `marketValue` | - | - | ❌ |
| `marketValueCurrency` | - | - | ❌ |
| `currency` | - | - | ❌ |
| `shirtNumber` | - | - | ❌ |
| `upcoming` | - | - | ❌ |

**Durum:** ⚠️ Temel transfer bilgisi var, finansal detaylar eksik

---

## 2. Team Player Tablosu

### Eski Tablo Yapısı
| Kolon | Tip | Açıklama | Zorunlu |
|-------|-----|----------|---------|
| `id` | UUID | Primary Key | ✅ |
| `teamId` | UUID | Takım referansı | ✅ |
| `playerId` | UUID | Oyuncu referansı | ✅ |
| `year` | Integer | Sezon yılı | ✅ |
| `role` | String | Oyuncu rolü | ❌ |
| `shirtNumber` | Integer | Forma numarası | ❌ |

### Yeni API Mapping
| Eski Kolon | Yeni API Alanı | Endpoint | Durum |
|------------|----------------|----------|-------|
| `teamId` | Competitor ID | `/competitors/{id}/profile` | ✅ |
| `playerId` | `player.id` | `/competitors/{id}/profile` | ✅ |
| `year` | Season bilgisinden | `/competitors/{id}/profile` | ✅ |
| `role` | `player.type` | `/competitors/{id}/profile` | ✅ |
| `shirtNumber` | `player.jersey_number` | `/competitors/{id}/profile` | ✅ |

**Durum:** ✅ Tam karşılanabilir

---

## 3. Team Staff Tablosu

### Eski Tablo Yapısı
| Kolon | Tip | Açıklama | Zorunlu |
|-------|-----|----------|---------|
| `id` | UUID | Primary Key | ✅ |
| `teamId` | UUID | Takım referansı | ✅ |
| `staffId` | UUID | Personel referansı | ✅ |
| `position` | String | Pozisyon | ✅ |
| `startDate` | Date | Başlangıç tarihi | ✅ |
| `endDate` | Date | Bitiş tarihi | ❌ |
| `order` | Integer | Sıralama | ✅ |

### Yeni API Mapping
| Eski Kolon | Yeni API Alanı | Endpoint | Durum |
|------------|----------------|----------|-------|
| `teamId` | Competitor ID | `/sport_events/{id}/lineups` | ✅ |
| `staffId` | `manager.id` | `/sport_events/{id}/lineups` | ✅ |
| `position` | - | - | ❌ |
| `startDate` | - | - | ❌ |
| `endDate` | - | - | ❌ |
| `order` | - | - | ❌ |

**Durum:** ⚠️ Sadece mevcut teknik direktör bilgisi var

---

## 4. Player Development Tablosu

### Eski Tablo Yapısı
| Kolon | Tip | Açıklama | Zorunlu |
|-------|-----|----------|---------|
| `id` | UUID | Primary Key | ✅ |
| `playerId` | UUID | Oyuncu referansı | ✅ |
| `teamId` | UUID | Takım referansı | ❌ |
| `valuationDate` | Timestamp | Değerleme tarihi | ✅ |
| `marketValue` | Integer | Piyasa değeri | ✅ |

### Yeni API Mapping
| Eski Kolon | Yeni API Alanı | Endpoint | Durum |
|------------|----------------|----------|-------|
| `playerId` | - | - | ❌ |
| `teamId` | - | - | ❌ |
| `valuationDate` | - | - | ❌ |
| `marketValue` | - | - | ❌ |

**Durum:** ❌ Tamamen eksik - piyasa değeri takibi yok

---

## 5. Player Injury Tablosu

### Eski Tablo Yapısı
| Kolon | Tip | Açıklama | Zorunlu |
|-------|-----|----------|---------|
| `id` | UUID | Primary Key | ✅ |
| `playerId` | UUID | Oyuncu referansı | ✅ |
| `problem` | String | Sakatlık türü | ✅ |
| `season` | Integer | Sezon | ❌ |
| `startDate` | Date | Başlangıç tarihi | ❌ |
| `returnDate` | Date | Dönüş tarihi | ❌ |
| `isImproved` | Boolean | İyileşti mi | ❌ |

### Yeni API Mapping
| Eski Kolon | Yeni API Alanı | Endpoint | Durum |
|------------|----------------|----------|-------|
| `playerId` | - | - | ❌ |
| `problem` | - | - | ❌ |
| `season` | - | - | ❌ |
| `startDate` | - | - | ❌ |
| `returnDate` | - | - | ❌ |
| `isImproved` | - | - | ❌ |

**Durum:** ❌ Tamamen eksik - sakatlık takibi yok

---

## 6. Player Additional Info Tablosu

### Eski Tablo Yapısı
| Kolon | Tip | Açıklama | Zorunlu |
|-------|-----|----------|---------|
| `id` | UUID | Primary Key | ✅ |
| `playerId` | UUID | Oyuncu referansı | ✅ |
| `type` | Enum | Bilgi tipi (youthClubs, additionalInfoExtra, other) | ✅ |
| `description` | String | Açıklama | ✅ |


### Yeni API Mapping
| Eski Kolon | Yeni API Alanı | Endpoint | Durum |
|------------|----------------|----------|-------|
| `playerId` | - | - | ❌ |
| `type` | - | - | ❌ |
| `description` | - | - | ❌ |

**Durum:** ❌ Tamamen eksik - ek oyuncu bilgileri yok

---

## 5. Player Injury Tablosu

### Eski Tablo Yapısı
| Kolon | Tip | Açıklama | Zorunlu |
|-------|-----|----------|---------|
| `id` | UUID | Primary Key | ✅ |
| `playerId` | UUID | Oyuncu referansı | ✅ |
| `problem` | String | Sakatlık türü | ✅ |
| `isImproved` | Boolean | İyileşme durumu | ❌ |
| `season` | Integer | Sezon | ❌ |
| `startDate` | Date | Başlangıç tarihi | ❌ |
| `returnDate` | Date | Dönüş tarihi | ❌ |

### Yeni API Mapping
| Eski Kolon | Yeni API Alanı | Endpoint | Durum |
|------------|----------------|----------|-------|
| `playerId` | `players[].player.id` | `/seasons/{id}/missing_players` | ✅ |
| `problem` | `players[].reason` (injured) | `/seasons/{id}/missing_players` | ⚠️ |
| `isImproved` | - | - | ❌ |
| `season` | Season ID | `/seasons/{id}/missing_players` | ✅ |
| `startDate` | `players[].start_date` | `/seasons/{id}/missing_players` | ✅ |
| `returnDate` | - | - | ❌ |

**Durum:** ⚠️ Temel sakatlık bilgileri var, detaylar eksik

---

## 6. Player Additional Info Tablosu

### Eski Tablo Yapısı
| Kolon | Tip | Açıklama | Zorunlu |
|-------|-----|----------|---------|
| `id` | UUID | Primary Key | ✅ |
| `playerId` | UUID | Oyuncu referansı | ✅ |
| `type` | Enum | Bilgi tipi (youthClubs, additionalInfoExtra, other) | ✅ |
| `description` | String | Açıklama | ✅ |

### Yeni API Mapping
| Eski Kolon | Yeni API Alanı | Endpoint | Durum |
|------------|----------------|----------|-------|
| `playerId` | Player ID | `/players/{id}/profile` | ✅ |
| `type` | - | - | ❌ |
| `description` | - | - | ❌ |

**Durum:** ❌ Tamamen eksik - ek oyuncu bilgileri yok

---

## Özet

### ✅ Tam Karşılanan Tablolar (1/6)
- **Team Player**: Takım-oyuncu ilişkileri

### ⚠️ Kısmi Karşılanan Tablolar (3/6)
- **Player Transfer**: Temel transfer bilgisi var, finansal detaylar eksik
- **Team Staff**: Sadece mevcut teknik direktör
- **Player Injury**: Temel sakatlık bilgileri var, detaylar eksik

### ❌ Kritik Eksiklikler (2/6)
- **Player Development**: Piyasa değeri takibi yok
- **Player Additional Info**: Ek bilgiler yok

### 🔧 Öneriler

#### Finansal Veriler
1. **Transfermarkt API**: Piyasa değeri ve transfer ücretleri için
2. **Manuel Veri Girişi**: Kritik transferler için
3. **Tahmin Algoritmaları**: Performans bazlı değer hesaplama

#### Sakatlık Takibi
1. **Season Missing Players API**: Temel sakatlık bilgileri için
2. **Alternatif Kaynaklar**: Detaylı sakatlık bilgileri için spor haber siteleri
3. **Manuel Takip**: Dönüş tarihleri ve iyileşme durumu için
4. **Lineup Analizi**: Sürekli eksik oyuncuları tespit etme

#### Personel Yönetimi
1. **Tarihsel Veri Koruma**: Mevcut staff verilerini sakla
2. **Manuel Güncelleme**: Sezon başlarında staff güncellemeleri
3. **Haber Takibi**: Teknik direktör değişiklikleri için

#### Veri Zenginleştirme
1. **Çoklu Kaynak**: Farklı API'lerden veri birleştirme
2. **Veri Kalitesi**: Tutarlılık kontrolleri
3. **Fallback Stratejileri**: Eksik veriler için alternatifler
