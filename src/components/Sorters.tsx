import * as React from "react";

export interface ISortersProps<T> {
  object: T;
  onChangeSorter: (sortProperty: keyof T, isDescending: boolean) => void;
}

export default function Sorters<T>(props: ISortersProps<T>) {
  const { object, onChangeSorter } = props;
  return (
    <>
      <select
        id="sorters"
        style={{
          padding: " 5px 14px 5px 20px",
          color: "grey",
          fontWeight: "bold",
          border: "1px solid lightGrey",
          borderRadius: "0.2rem",
          margin: "15px",
          textAlign: "start",
        }}
        onChange={(event) =>
          onChangeSorter(
            event.target.value.split(",")[0] as any,
            event.target.value.split(",")[1] === "true"
          )
        }
        defaultValue={["title", "true"]}
      >
        {Object.keys(object).map((key) => {
          if (!key) {
            return <></>;
          }
          if (key === "episode_id") {
            return (
              <>
                <option value="default">Sort By</option>
                <option key={`${key}-false`} value={[key, "false"]}>
                  Episode
                </option>
              </>
            );
          }
          if (key === "release_date") {
            return (
              <>
                <option key={`${key}-false`} value={[key, "false"]}>
                  Year
                </option>
              </>
            );
          }
        })}
      </select>
    </>
  );
}