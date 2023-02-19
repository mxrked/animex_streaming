/**
 *
 *  This is the search
 *
 */

import { useRouter } from "next/router";

import { BackgroundImage } from "react-image-and-background-image-fade";

import FilterSearchLinks from "@/assets/functions/dom/filters/FilterSearchLinks";
import SearchRoute from "@/assets/functions/routing/SearchRoute";
import CloseSearch from "@/assets/functions/dom/closers/CloseSearch";

import styles from "../../../../styles/modules/Nav/Nav.module.css";

export const Search = (props) => {
  const router = useRouter();

  return (
    <div id="search" className={`${styles.search} full-second`}>
      <div id="searchInner" className={`${styles.search_inner} half-second`}>
        <button
          id="searchCloser"
          className={`${styles.search_closer} half-second`}
          onClick={() => {
            CloseSearch();
          }}
        >
          Close
        </button>

        <div className={`${styles.search_inner_top}`}>
          <div className={`${styles.search_inner_top_input_holder}`}>
            <input
              type="text"
              className="half-second"
              id="searchIpt"
              placeholder="Search.."
              autoComplete={"off"}
              role={"presentation"}
              onKeyUp={(e) => {
                FilterSearchLinks();
              }}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  SearchRoute(router);
                }
              }}
            />
          </div>
        </div>

        <div className={`${styles.search_inner_links}`}>
          <ul id="searchLinks">
            {props.searchData.map((item) => (
              <li
                className={`${styles.search_link} ${item.searchItemLinkType} search-link half-second`}
                key={item.searchItemID}
                onClick={() => {
                  router.push(item.searchItemLink);
                }}
              >
                <BackgroundImage
                  src={item.searchItemImg}
                  className={`${styles.bg}`}
                />

                <span className="search-link-name">
                  <span>Series -</span> {item.searchItemName}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
