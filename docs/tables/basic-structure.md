# Temel Yapı Tabloları

Bu bölümde ülke, lig ve temel yapısal tabloların migration mapping'i yer almaktadır.

## 1. Country Tablosu

### Eski Tablo Yapısı

| Kolon | Tip | Açıklama | Zorunlu |
|-------|-----|----------|---------|
| `id` | UUID | Primary Key | ✅ |
| `name` | String | Ülke adı | ✅ |
| `unicode` | String | Unicode kodu | ❌ |

| `createdAt` | Timestamp | Oluşturma tarihi | ✅ |
| `updatedAt` | Timestamp | Güncelleme tarihi | ✅ |

### Yeni API Mapping

| Eski Kolon | Yeni API Alanı | Endpoint | Durum |
|------------|----------------|----------|-------|
| `name` | `category.name` | `/competitions` | ✅ |
| `unicode` | `category.country_code` | `/competitions` | ✅ |

**Durum:** ✅ Tam karşılanabilir

---

## 2. League Tablosu

### Eski Tablo Yapısı

| Kolon | Tip | Açıklama | Zorunlu |
|-------|-----|----------|---------|
| `id` | UUID | Primary Key | ✅ |
| `name` | String | Lig adı | ✅ |
| `code` | String | Lig kodu (Unique) | ✅ |
| `level` | String | Lig seviyesi | ❌ |
| `levelDescription` | String | Seviye açıklaması | ❌ |
| `format` | Integer | Format tipi | ❌ |
| `factor` | Double | Faktör değeri | ❌ |
| `priority` | Double | Öncelik | ❌ |
| `isCurrentlyBeingPlayed` | Boolean | Şu an oynanıyor mu | ❌ |
| `startDate` | Date | Başlangıç tarihi | ❌ |
| `endDate` | Date | Bitiş tarihi | ❌ |
| `endSeasonMonth` | Integer | Sezon bitiş ayı | ❌ |
| `countryId` | UUID | Ülke referansı | ✅ |

### Yeni API Mapping

| Eski Kolon | Yeni API Alanı | Endpoint | Durum |
|------------|----------------|----------|-------|
| `name` | `competition.name` | `/competitions/{id}/info` | ✅ |
| `code` | - | - | ❌ |
| `level` | - | - | ❌ |
| `levelDescription` | - | - | ❌ |
| `format` | - | - | ❌ |
| `factor` | - | - | ❌ |
| `priority` | - | - | ❌ |
| `isCurrentlyBeingPlayed` | - | - | ❌ |
| `startDate` | `season.start_date` | `/seasons/{id}` | ⚠️ |
| `endDate` | `season.end_date` | `/seasons/{id}` | ⚠️ |
| `countryId` | `competition.category.country_code` | `/competitions/{id}/info` | ✅ |

**Durum:** ❌ Kritik eksiklikler - lig hiyerarşisi ve meta bilgiler yok

---

## 3. Generic Status Tablosu

### Eski Tablo Yapısı

| Kolon | Tip | Açıklama | Zorunlu |
|-------|-----|----------|---------|
| `id` | UUID | Primary Key | ✅ |
| `name` | String | Durum adı | ✅ |
| `statusType` | String | Durum tipi | ✅ |
| `description` | String | Açıklama | ❌ |
| `sortOrder` | Integer | Sıralama | ✅ |
| `isActive` | Boolean | Aktif mi | ✅ |

### Yeni API Mapping

| Eski Kolon | Yeni API Alanı | Endpoint | Durum |
|------------|----------------|----------|-------|
| `name` | `sport_event_status.status` | `/sport_events/{id}/summary` | ⚠️ |
| `statusType` | - | - | ❌ |
| `description` | - | - | ❌ |
| `sortOrder` | - | - | ❌ |
| `isActive` | - | - | ❌ |

**Durum:** ❌ Sadece maç durumları için kısmi karşılık var

---

## 4. League Team Tablosu

### Eski Tablo Yapısı

| Kolon | Tip | Açıklama | Zorunlu |
|-------|-----|----------|---------|
| `id` | UUID | Primary Key | ✅ |
| `teamId` | UUID | Takım referansı | ✅ |
| `leagueId` | UUID | Lig referansı | ✅ |
| `year` | Integer | Sezon yılı | ✅ |

### Yeni API Mapping

| Eski Kolon | Yeni API Alanı | Endpoint | Durum |
|------------|----------------|----------|-------|
| `teamId` | `competitor.id` | `/seasons/{id}/competitors` | ✅ |
| `leagueId` | `season.competition.id` | `/seasons/{id}/competitors` | ✅ |
| `year` | `season.year` | `/seasons/{id}/competitors` | ✅ |

**Durum:** ✅ Tam karşılanabilir

---

## Özet

### ✅ Tam Karşılanan Tablolar (2/4)

- **Country**: Tam karşılanabilir
- **League Team**: Takım-lig ilişkileri

### ⚠️ Kısmi Karşılanan Tablolar (1/4)

- **Generic Status**: Sadece maç durumları

### ❌ Kritik Eksiklikler (1/4)

- **League**: Lig hiyerarşisi ve meta bilgiler

### 🔧 Öneriler

1. **Lig Hiyerarşisi**: Manuel mapping tablosu oluşturulmalı
2. **Görsel İçerik**: Ayrı CDN/storage çözümü gerekli
3. **Meta Bilgiler**: Alternatif veri kaynakları araştırılmalı
