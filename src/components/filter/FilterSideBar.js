import styles from "./FilterSidebar.module.css";

const FilterSidebar = () => {
  const filters = [
    { title: "IDEAL FOR", options: ["Men", "Women", "Baby & Kids"] },
    { title: "OCCASION", options: ["All"] },
    { title: "WORK", options: ["All"] },
    { title: "FABRIC", options: ["All"] },
    { title: "SEGMENT", options: ["All"] },
    { title: "SUITABLE FOR", options: ["All"] },
    { title: "RAW MATERIALS", options: ["All"] },
    { title: "PATTERN", options: ["All"] },
  ];

  return (
    <div className={styles.sidebar}>
      <div className={styles.filterItem}>
        <label className={styles.checkbox}>
          <input type="checkbox" /> Customizable
        </label>
      </div>
      {filters.map((filter, index) => (
        <div key={index} className={styles.filterItem}>
          <summary>{filter.title}</summary>
          {filter.options.length > 0 && (
            <div className={styles.filterContent}>
              {filter.options.map((option, idx) => (
                <label key={idx} className={styles.checkbox}>
                  {option === "All" ? (
                    option
                  ) : (
                    <>
                      <input type="checkbox" />
                      {option}
                    </>
                  )}
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FilterSidebar;
