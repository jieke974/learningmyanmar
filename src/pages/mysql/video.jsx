export const videos = [
  {
    id: 0,
    video_id: "DvVWyR_OSYM",
    title: "Introduction",
    embedUrl: "https://www.youtube.com/embed/DvVWyR_OSYM",
  },
  {
    id: 1,
    video_id: "aWkYGta6WQw",
    title: "SQL SELECT",
    embedUrl: "https://www.youtube.com/embed/aWkYGta6WQw",
  },
  {
    id: 2,
    video_id: "Bb9bnALwpp8",
    title: "SQL AND , OR & NOT",
    embedUrl: "https://www.youtube.com/embed/Bb9bnALwpp8",
  },
  {
    id: 3,
    video_id: "FB1vJ2PmJw4",
    title: "SQL SELECT DISTINCT & AS",
    embedUrl: "https://www.youtube.com/embed/FB1vJ2PmJw4",
  },
  {
    id: 4,
    video_id: "ShUeP-cZ4Ck",
    title: "SQL LIMIT , TOP  and FIRST FETCH",
    embedUrl: "https://www.youtube.com/embed/ShUeP-cZ4Ck",
  },
  {
    id: 5,
    video_id: "qjEb1DwP2cU",
    title: "SQL IN and BETWEEN Operators",
    embedUrl: "https://www.youtube.com/embed/qjEb1DwP2cU",
  },
  {
    id: 6,
    video_id: "Bf6sxZccKUo",
    title: "SQL IS NULL & NOT NULL",
    embedUrl: "https://www.youtube.com/embed/Bf6sxZccKUo",
  },
  {
    id: 7,
    video_id: "6yLSHo9svFA",
    title: "SQL MAX() & MIN()",
    embedUrl: "https://www.youtube.com/embed/6yLSHo9svFA",
  },
  {
    id: 8,
    video_id: "aAk3paxW3v0",
    title: "SQL COUNT()",
    embedUrl: "https://www.youtube.com/embed/aAk3paxW3v0",
  },
  {
    id: 9,
    video_id: "1qNN9-Ov82o",
    title: "SQL SUM() & AVG()",
    embedUrl: "https://www.youtube.com/embed/1qNN9-Ov82o",
  },
  {
    id: 10,
    video_id: "TaYyX6Sf5dM",
    title: "SQL ORDER BY",
    embedUrl: "https://www.youtube.com/embed/TaYyX6Sf5dM",
  },
  {
    id: 11,
    video_id: "iSpKf-dOBXw",
    title: "SQL GROUP BY",
    embedUrl: "https://www.youtube.com/embed/iSpKf-dOBXw",
  },
  {
    id: 12,
    video_id: "BgJy_cHagZI",
    title: "SQL LIKE & WILDCARD",
    embedUrl: "https://www.youtube.com/embed/BgJy_cHagZI",
  },
  {
    id: 13,
    video_id: "329mQzua34o",
    title: "SQL Union",
    embedUrl: "https://www.youtube.com/embed/329mQzua34o",
  },
  {
    id: 14,
    video_id: "jk1MM9j4rkA",
    title: "SQL Subquery ANY & ALL",
    embedUrl: "https://www.youtube.com/embed/jk1MM9j4rkA",
  },
  {
    id: 15,
    video_id: "qd9xTSYHCF8",
    title: "SQL CASE",
    embedUrl: "https://www.youtube.com/embed/qd9xTSYHCF8",
  },
  {
    id: 16,
    video_id: "IDE4gtbTyJw",
    title: "SQL HAVING & EXISTS",
    embedUrl: "https://www.youtube.com/embed/IDE4gtbTyJw",
  },
  {
    id: 17,
    video_id: "PbTK5Is3pLQ",
    title: "SQL JOIN",
    embedUrl: "https://www.youtube.com/embed/PbTK5Is3pLQ",
  },
  {
    id: 18,
    video_id: "F6zx1bbeXwM",
    title: "SQL LEFT , RIGHT & FULL OUTER JON",
    embedUrl: "https://www.youtube.com/embed/F6zx1bbeXwM",
  },
  {
    id: 19,
    video_id: "lhIkLeB6vCo",
    title: "SQL Database & Table",
    embedUrl: "https://www.youtube.com/embed/lhIkLeB6vCo",
  },
  {
    id: 20,
    video_id: "ggktK4R5reQ",
    title: "SQL Insert , Update & Delete",
    embedUrl: "https://www.youtube.com/embed/ggktK4R5reQ",
  },
  {
    id: 21,
    video_id: "C61niDU6yV4",
    title: "SQL Constraints",
    embedUrl: "https://www.youtube.com/embed/C61niDU6yV4",
  },
  {
    id: 22,
    video_id: "6GXiSBFmR9g",
    title: "SQL Primary & Foreign Keys",
    embedUrl: "https://www.youtube.com/embed/6GXiSBFmR9g",
  },
  {
    id: 23,
    video_id: "AjqmpkRB9FI",
    title: "SQL Additional Topics",
    embedUrl: "https://www.youtube.com/embed/AjqmpkRB9FI",
  },
  {
    id: 24,
    video_id: "t0o8NqfZYFc",
    title: "SQL DATE & Time",
    embedUrl: "https://www.youtube.com/embed/t0o8NqfZYFc",
  },
  {
    id: 25,
    video_id: "oILRUx19oz8",
    title: "SQL Operators & Comments",
    embedUrl: "https://www.youtube.com/embed/oILRUx19oz8",
  },
  {
    id: 26,
    video_id: "QU8gnPQwYyY",
    title: "SQL Injection",
    embedUrl: "https://www.youtube.com/embed/QU8gnPQwYyY",
  },
];

import { useState } from "react";
import { useParams } from "react-router";
export default function Mysqlvideos() {
  const { id } = useParams();
  const [error, seterror] = useState(false);

  return (
    <div className="flex justify-center mt-15">
      {error ? (
        <p>Video can not be loaded</p>
      ) : (
        <iframe
          width="790"
          height="425"
          src={videos[id].embedUrl}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          onError={() => seterror(true)}
        ></iframe>
      )}
    </div>
  );
}
