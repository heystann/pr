import { Container } from "../components/Container"
import SearchIcon from "../assets/icons/search.svg?react"
import { SearchInput } from "../components/SearchInput"
import FilterComponent from "../components/Filters"
import {Cards} from "../components/Cards"

export const HomePage = () => {
  return <Container>
    <div className="LatestNFT">
      <div className="latest-head text-center mb-4">Latest NFTs</div>
      <div className="latest-search d-flex flex-column align-items-center mb-4">
        <div className="search-container mb-4">
          <SearchInput />
          <button className="search-icon">
            <SearchIcon />
          </button>
        </div>
        <FilterComponent/>
      </div>
      <Cards />
    </div>
  </Container>
}