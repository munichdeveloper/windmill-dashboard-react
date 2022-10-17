export default [
  {
    name: 'daemon',
    displayName: 'ScPrime Daemon',
    status: 'primary',
    displayStatus: 'running',
    tooltip: 'Dieses Modul kapselt den ScPrime Daemon auf der Instanz.'
  },
  {
    name: 'priceUpdater',
    displayName: 'Auto Price Updater',
    status: 'success',
    displayStatus: 'working',
    tooltip: 'Dieses Modul fragt alle 10 Minuten den aktuellen Preis / TB / Monat an, zu dem man idealerweiße seinen Speicher vermieten sollte und setzt diesen Wert automatisch auf der laufenden Instanz, so dass man stets incentive konform unterwegs ist und somit seine Erträge maximiert.'
  },
  {
    name: undefined,
    displayName: 'IP Check',
    status: 'warning',
    displayStatus: 'not loaded',
    tooltip: 'Dieses Modul prüft, ob unter dem konfigurierten DNS Namen die IP Adresse des Hosts zurückgegeben wird.'
  },
  {
    name: undefined,
    displayName: 'Port Check',
    status: 'success',
    displayStatus: 'success',
    tooltip: 'Dieses Modul prüft, ob die Ports 4280, 4282 und 4283 von außen erreichbar sind, was für einen ordnungsgemäßen Betrieb unabdingbar ist.'
  },
  {
    name: undefined,
    displayName: 'Auto Updater',
    status: 'warning',
    displayStatus: 'not loaded',
    tooltip: 'Dieses Modul aktualisiert automatisch die ScPrime Software auf die aktuellste Version, sobald eine neue Version erscheint.'
  },
  {
    name: undefined,
    displayName: 'Uptime Monitoring',
    status: 'danger',
    displayStatus: 'danger',
    tooltip: 'Dieses Modul überwacht die Instanz und sendet einen Alarm, falls die Instanz nicht ordnungsgemäß läuft.'
  },
  {
    name: undefined,
    displayName: 'Collateral Watchdog',
    status: 'success',
    displayStatus: 'success',
    tooltip: 'Dieses Modul überwacht die verfügbare Sicherheitenleistung und zeigt an, falls diese nicht ausreicht.'
  },
  {
    name: undefined,
    displayName: 'MetaData Backup',
    status: 'success',
    displayStatus: 'success',
    tooltip: 'Dieses Modul erstellt und überwacht das Backup der MetaDaten.'
  },
  {
    name: 'sanityCheck',
    displayName: 'Sanity Check',
    status: 'success',
    displayStatus: 'success',
    tooltip: 'Dieses Modul führt einige grundsätzliche Checks / Überprüfungen aus.'
  },
]
