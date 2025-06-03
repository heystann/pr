import { Card } from "./Card"

export const Cards = () => {
  return (
    <div className="cards">
      <div className="row mb-4">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="row mb-4">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}