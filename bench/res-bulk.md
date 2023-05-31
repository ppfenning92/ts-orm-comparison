| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `npm run --silent ts-node bench/typeorm.ts 100` | 3.173 ± 0.321 | 2.898 | 3.730 | 1.26 ± 0.13 |
| `npm run --silent ts-node bench/drizzle.ts 100` | 2.834 ± 0.107 | 2.679 | 2.980 | 1.12 ± 0.05 |
| `npm run --silent ts-node bench/prisma.ts 100` | 2.524 ± 0.044 | 2.451 | 2.622 | 1.00 |
| `npm run --silent ts-node bench/typeorm.ts 1000` | 7.608 ± 0.226 | 7.414 | 8.118 | 3.01 ± 0.10 |
| `npm run --silent ts-node bench/drizzle.ts 1000` | 5.086 ± 0.123 | 4.954 | 5.295 | 2.01 ± 0.06 |
| `npm run --silent ts-node bench/prisma.ts 1000` | 7.213 ± 0.103 | 7.037 | 7.365 | 2.86 ± 0.06 |
