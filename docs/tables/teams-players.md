# Takım ve Oyuncu Tabloları

Bu bölümde takım, oyuncu ve personel tablolarının migration mapping'i yer almaktadır.

## 1. Team Tablosu

### Eski Tablo Yapısı
| Kolon | Tip | Açıklama | Zorunlu |
|-------|-----|----------|---------|
| `id` | UUID | Primary Key | ✅ |
| `name` | String | Takım adı | ✅ |
| `code` | String | Takım kodu (Unique) | ✅ |
| `title` | String | Takım kısa adı | ✅ |
| `city` | String | Şehir | ❌ |
| `foundedYear` | Integer | Kuruluş yılı | ❌ |

| `countryId` | UUID | Ülke referansı | ❌ |


### Yeni API Mapping
| Eski Kolon | Yeni API Alanı | Endpoint | Durum |
|------------|----------------|----------|-------|
| `name` | `competitor.name` | `/competitors/{id}/profile` | ✅ |
| `code` | `competitor.abbreviation` | `/competitors/{id}/profile` | ✅ |
| `title` | `competitor.short_name` | `/competitors/{id}/profile` | ✅ |
| `city` | `venue.city_name` | `/competitors/{id}/profile` | ⚠️ |
| `foundedYear` | - | - | ❌ |
| `countryId` | `competitor.country_code` | `/competitors/{id}/profile` | ✅ |

**Durum:** ✅ Çoğu bilgi karşılanabilir, sadece kuruluş yılı eksik

---

## 2. Player Tablosu

### Eski Tablo Yapısı
| Kolon | Tip | Açıklama | Zorunlu |
|-------|-----|----------|---------|
| `id` | UUID | Primary Key | ✅ |
| `firstName` | String | Ad | ✅ |
| `lastName` | String | Soyad | ✅ |
| `fullName` | String | Tam ad | ❌ |
| `displayName` | String | Görünen ad | ❌ |
| `dateOfBirth` | Timestamp | Doğum tarihi | ✅ |
| `placeOfBirth` | String | Doğum yeri | ✅ |
| `height` | Integer | Boy | ✅ |
| `weight` | Integer | Kilo | ✅ |
| `foot` | Enum | Tercih edilen ayak | ✅ |
| `mainPosition` | String | Ana pozisyon | ✅ |
| `otherPositions` | JSONB | Diğer pozisyonlar | ❌ |
| `marketValue` | Integer | Piyasa değeri | ❌ |
| `isRetired` | Boolean | Emekli mi | ❌ |
| `outfitter` | String | Sponsor | ❌ |
| `countryOfBirthId` | UUID | Doğum ülkesi | ✅ |


### Yeni API Mapping
| Eski Kolon | Yeni API Alanı | Endpoint | Durum |
|------------|----------------|----------|-------|
| `firstName` | `player.first_name` | `/seasons/{id}/competitors/{id}/players` | ✅ |
| `lastName` | `player.last_name` | `/seasons/{id}/competitors/{id}/players` | ✅ |
| `fullName` | `player.name` | `/players/{id}/profile` | ✅ |
| `displayName` | `player.display_first_name + display_last_name` | `/seasons/{id}/competitors/{id}/players` | ✅ |
| `dateOfBirth` | `player.date_of_birth` | `/players/{id}/profile` | ✅ |
| `placeOfBirth` | `player.place_of_birth` | `/players/{id}/profile` | ✅ |
| `height` | `player.height` | `/players/{id}/profile` | ✅ |
| `weight` | `player.weight` | `/seasons/{id}/competitors/{id}/players` | ✅ |
| `foot` | `player.preferred_foot` | `/players/{id}/profile` | ✅ |
| `mainPosition` | `player.type` | `/players/{id}/profile` | ✅ |
| `otherPositions` | - | - | ❌ |
| `marketValue` | - | - | ❌ |
| `isRetired` | - | - | ❌ |
| `outfitter` | - | - | ❌ |
| `countryOfBirthId` | `player.country_code` | `/players/{id}/profile` | ✅ |


**Durum:** ✅ Çoğu bilgi karşılanabilir, sadece piyasa değeri ve emeklilik durumu eksik

---

## 3. Staff Tablosu

### Eski Tablo Yapısı
| Kolon | Tip | Açıklama | Zorunlu |
|-------|-----|----------|---------|
| `id` | UUID | Primary Key | ✅ |
| `name` | String | Personel adı | ✅ |
| `dateOfBirth` | Timestamp | Doğum tarihi | ❌ |



### Yeni API Mapping
| Eski Kolon | Yeni API Alanı | Endpoint | Durum |
|------------|----------------|----------|-------|
| `name` | `manager.name` | `/sport_events/{id}/lineups` | ✅ |
| `dateOfBirth` | `manager.date_of_birth` | `/sport_events/{id}/lineups` | ✅ |



**Durum:** ✅ Temel bilgiler karşılanabilir

---

## 4. Referee Tablosu

### Eski Tablo Yapısı
| Kolon | Tip | Açıklama | Zorunlu |
|-------|-----|----------|---------|
| `id` | UUID | Primary Key | ✅ |
| `firstName` | String | Ad | ✅ |
| `lastName` | String | Soyad | ✅ |
| `dateOfBirth` | Timestamp | Doğum tarihi | ❌ |
| `tmId` | Integer | Transfermarkt ID | ❌ |


### Yeni API Mapping
| Eski Kolon | Yeni API Alanı | Endpoint | Durum |
|------------|----------------|----------|-------|
| `firstName` | `referee.name` (ayrıştırma) | Sport event conditions | ⚠️ |
| `lastName` | `referee.name` (ayrıştırma) | Sport event conditions | ⚠️ |
| `dateOfBirth` | - | - | ❌ |
| `tmId` | - | - | ❌ |

**Durum:** ⚠️ Sadece isim bilgisi var

---

## 5. Player Citizenship Tablosu

### Eski Tablo Yapısı
| Kolon | Tip | Açıklama | Zorunlu |
|-------|-----|----------|---------|
| `id` | UUID | Primary Key | ✅ |
| `playerId` | UUID | Oyuncu referansı | ✅ |
| `countryId` | UUID | Ülke referansı | ✅ |
| `order` | Integer | Vatandaşlık önceliği | ✅ |

### Yeni API Mapping
| Eski Kolon | Yeni API Alanı | Endpoint | Durum |
|------------|----------------|----------|-------|
| `playerId` | Player ID | `/players/{id}/profile` | ✅ |
| `countryId` | `player.nationality` | `/players/{id}/profile` | ⚠️ |
| `order` | - | - | ❌ |

**Durum:** ⚠️ Sadece tek vatandaşlık bilgisi var

---

## 6. Player Position Tablosu

### Eski Tablo Yapısı
| Kolon | Tip | Açıklama | Zorunlu |
|-------|-----|----------|---------|
| `id` | UUID | Primary Key | ✅ |
| `playerId` | UUID | Oyuncu referansı | ✅ |
| `position` | String | Pozisyon | ✅ |

### Yeni API Mapping
| Eski Kolon | Yeni API Alanı | Endpoint | Durum |
|------------|----------------|----------|-------|
| `playerId` | Player ID | `/players/{id}/profile` | ✅ |
| `position` | `player.type` | `/players/{id}/profile` | ⚠️ |

**Durum:** ⚠️ Sadece ana pozisyon var, çoklu pozisyon yok

---

## Özet

### ✅ Tam Karşılanan Tablolar (2/6)
- **Team**: Çoğu bilgi karşılanabilir, sadece kuruluş yılı eksik
- **Player**: Çoğu bilgi karşılanabilir, sadece piyasa değeri ve emeklilik durumu eksik

### ⚠️ Kısmi Karşılanan Tablolar (4/6)
- **Staff**: Temel bilgiler var, görsel eksik
- **Referee**: Sadece isim var
- **Player Citizenship**: Tek vatandaşlık
- **Player Position**: Sadece ana pozisyon

### ❌ Kritik Eksiklikler (0/6)
- Hiçbiri

### 🔧 Öneriler
1. **Piyasa Değeri**: Transfermarkt API entegrasyonu
2. **Görsel İçerik**: Ayrı görsel veri kaynağı
3. **Takım Detayları**: Manuel veri girişi gerekli
4. **Çoklu Pozisyon**: Ayrı pozisyon tablosu oluşturulmalı
