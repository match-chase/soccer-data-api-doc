---
sidebar_position: 1
---

# MatchChase Migration Docs

Bu dokümantasyon, **MatchChase eski veritabanı şemasından yeni Sportradar API'ye geçiş** sürecini detaylandırır.

## 🎯 Amaç

Mevcut futbol veri sistemimizin eski API'den **Sportradar Soccer Extended v4 API**'sine geçiş sürecinde:

- Hangi verilerin karşılanabileceğini
- Hangi alanların eksik kalacağını
- Hangi yeni verilerin elde edilebileceğini
- Migration stratejisini

detaylı bir şekilde analiz etmek.

## 📊 Hızlı Bakış

| Kategori | Durum |
|----------|-------|
| **Toplam Tablo** | 31 |
| **✅ Tam Karşılanan** | 17 |
| **⚠️ Kısmi Karşılanan** | 9 |
| **❌ Karşılanamayan** | 5 |

## 🚀 Başlangıç

Migration analizi için aşağıdaki bölümleri inceleyebilirsiniz:

### 📋 [Migration Overview](./migration-overview)

Genel durum özeti ve migration stratejisi

### 📊 Detaylı Tablo Analizleri

- [Temel Yapı Tabloları](./tables/basic-structure)
- [Takım ve Oyuncu Tabloları](./tables/teams-players)
- [Maç Verileri Tabloları](./tables/match-data)
- [İstatistik Tabloları](./tables/statistics)
- [Transfer ve Kadro Tabloları](./tables/transfers-squad)

### 🚀 [API Ekstra Verileri](./api-extras)

Sportradar API'den gelen tüm ekstra veriler ve kullanım önerileri

## ⚠️ Kritik Noktalar

- **Finansal Veriler**: Piyasa değeri, transfer ücretleri karşılanamıyor
- **Görsel İçerik**: Logo, fotoğraf bilgileri eksik
- **Gelişmiş Analitikler**: Detaylı performans metrikleri yok
- **Tarihsel Veriler**: Sakatlık geçmişi, piyasa değeri gelişimi eksik
