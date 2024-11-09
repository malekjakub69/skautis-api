# Knihovna Skautis API pro TypeScript

Tato knihovna poskytuje jednoduché rozhraní pro připojení k Skautis API pomocí TypeScript. Zahrnuje metody pro vytváření požadavků HTTP na koncové body API, zpracování autentizace a analýzu odpovědí.

## Instalace

Chcete-li tuto knihovnu nainstalovat, spusťte následující příkaz v terminálu:

```bash
npm install skautis-api
```

## Použití

Tady je základní příklad, jak použít tuto knihovnu k získání dat ze Skautis API:

```typescript
import { SkautisAPI } from 'skautis-api';

const api = new SkautisAPI('your_api_key_here');

api.getData()
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

## Metody

Knihovna poskytuje následující metody:

* `getData()`: Získává data ze Skautis API.
* `postData(data)`: Odesílá data do Skautis API.
* `putData(data)`: Aktualizuje data ve Skautis API.
* `deleteData()`: Odstraňuje data ze Skautis API.

## Autentizace

Knihovna automaticky zpracovává autentizaci pomocí API klíče poskytnutého v konstruktoru. Ujistěte se, že nahradíte `'your_api_key_here'` svým skutečným API klíčem.

## Analýza odpovědi

Knihovna analyzuje odpověď ze Skautis API do objektu JSON. Pokud odpověď není ve formátu JSON, vyhodí chybu.

## Zpracování chyb

Knihovna vyhodí chyby, pokud nastane problém s požadavkem nebo odpovědí. Tyto chyby můžete zachytit pomocí bloku try-catch.

## Příspěvky

Příspěvky jsou vítány! Pokud chcete přispět k této knihovně, prosím, forkujte repozitář, proveďte změny a odešlete pull request.

## Licence

Tato knihovna je licencována podle ISC Licence.

