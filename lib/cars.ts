export type BodyType = 'Sedan' | 'Hatchback'

export type CarColor =
  | 'Silver'
  | 'Black'
  | 'Gray'
  | 'White'
  | 'Gun Metallic'
  | 'Red'
  | 'Blue'
  | 'Yellow'
  | 'Elegant Black'

export interface Car {
  id: string
  year: number
  brand: string
  model: string
  variant: string
  color: CarColor
  bodyType: BodyType
}

export const cars: Car[] = [
  {
    id: '1',
    year: 2023,
    brand: 'Mitsubishi',
    model: 'Mirage',
    variant: 'GLS',
    color: 'Silver',
    bodyType: 'Hatchback',
  },
  {
    id: '2',
    year: 2024,
    brand: 'Toyota',
    model: 'Vios',
    variant: 'XLE',
    color: 'Black',
    bodyType: 'Sedan',
  },
  {
    id: '3',
    year: 2025,
    brand: 'Honda',
    model: 'City',
    variant: 'S',
    color: 'Gray',
    bodyType: 'Sedan',
  },
  {
    id: '4',
    year: 2018,
    brand: 'Honda',
    model: 'City',
    variant: 'VX',
    color: 'White',
    bodyType: 'Sedan',
  },
  {
    id: '5',
    year: 2024,
    brand: 'Nissan',
    model: 'Almera',
    variant: 'VE Turbo',
    color: 'Gun Metallic',
    bodyType: 'Sedan',
  },
  {
    id: '6',
    year: 2024,
    brand: 'Nissan',
    model: 'Almera',
    variant: 'VE Turbo',
    color: 'Red',
    bodyType: 'Sedan',
  },
  {
    id: '7',
    year: 2025,
    brand: 'Toyota',
    model: 'Wigo',
    variant: 'G',
    color: 'Silver',
    bodyType: 'Hatchback',
  },
  {
    id: '8',
    year: 2023,
    brand: 'MG',
    model: 'GT',
    variant: 'Sport',
    color: 'Blue',
    bodyType: 'Sedan',
  },
  {
    id: '9',
    year: 2024,
    brand: 'MG',
    model: 'GT',
    variant: 'Sport',
    color: 'Yellow',
    bodyType: 'Sedan',
  },
  {
    id: '10',
    year: 2023,
    brand: 'GAC',
    model: 'Empow',
    variant: 'GB',
    color: 'Elegant Black',
    bodyType: 'Sedan',
  },
]

export const colorConfig: Record<
  CarColor,
  { hex: string; bg: string; text: string; label: string; darkText: boolean }
> = {
  Silver: {
    hex: '#b0b8c1',
    bg: '#e8ecef',
    text: '#5c6470',
    label: 'Silver',
    darkText: true,
  },
  Black: {
    hex: '#222222',
    bg: '#2e2e2e',
    text: '#ffffff',
    label: 'Black',
    darkText: false,
  },
  Gray: {
    hex: '#8d9099',
    bg: '#dde0e4',
    text: '#4a4d54',
    label: 'Gray',
    darkText: true,
  },
  White: {
    hex: '#e8e8e8',
    bg: '#f5f5f5',
    text: '#444444',
    label: 'Pearl White',
    darkText: true,
  },
  'Gun Metallic': {
    hex: '#5a6473',
    bg: '#cdd3da',
    text: '#2e3540',
    label: 'Gun Metallic',
    darkText: true,
  },
  Red: {
    hex: '#c0191f',
    bg: '#f9d5d6',
    text: '#7a0d11',
    label: 'Candy Red',
    darkText: true,
  },
  Blue: {
    hex: '#1d5cc8',
    bg: '#d1defc',
    text: '#0f2d6a',
    label: 'Ocean Blue',
    darkText: true,
  },
  Yellow: {
    hex: '#d4900a',
    bg: '#fdf0c5',
    text: '#7a5200',
    label: 'Solar Yellow',
    darkText: true,
  },
  'Elegant Black': {
    hex: '#111111',
    bg: '#222222',
    text: '#ffffff',
    label: 'Elegant Black',
    darkText: false,
  },
}

export const ALL_BRANDS = ['All', 'Mitsubishi', 'Toyota', 'Honda', 'Nissan', 'MG', 'GAC']
export const ALL_BODY_TYPES: (BodyType | 'All')[] = ['All', 'Sedan', 'Hatchback']
