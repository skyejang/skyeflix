import { useEffect, useState } from "react";
import { API_KEY } from "@env";
const useMovieDetail = (movieId) => {
  const [movieDetail, setMovieDetail] = useState({});

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const url =
          "https://api.themoviedb.org/3/movie/" + movieId + "?language=en-US";
        // "https://api.themoviedb.org/3/movie/1022789?language=en-US";
        const headers = {
          accept: "application/json",
          Authorization: "Bearer " + API_KEY,
        };
        const response = await fetch(url, {
          method: "GET",
          headers: headers,
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        // console.log(111111111);
        // console.log(data);
        setMovieDetail({
          title: data.title,
          genre: data.genres,
          uri: data.poster_path,
          overview: data.overview,
          releaseDate: data.release_date,
          runtime: data.runtime,
          language: data.spoken_languages.map((lang) => lang.iso_639_1),
        });
      } catch (error) {
        console.error("Error fetching Movie List info:", error);
      }
    };

    if (movieId) {
      fetchMovieDetail();
    }
  }, [movieId]);
  return movieDetail;
};

const useGetCredit = (movieId) => {
  const [castDetail, setCastDetail] = useState([]);
  const [crewDetail, setCrewDetail] = useState([]);

  useEffect(() => {
    const fetchCreditDetail = async () => {
      try {
        const url =
          "https://api.themoviedb.org/3/movie/" +
          movieId +
          "/credits?language=en-US";
        // "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&region=KR";
        const headers = {
          accept: "application/json",
          Authorization: "Bearer " + API_KEY,
        };
        const response = await fetch(url, {
          method: "GET",
          headers: headers,
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        const castInfo = data.cast
          .filter((person) => person.profile_path !== null)
          .map((person) => ({
            character: person.character,
            name: person.original_name,
            profile: person.profile_path,
          }));
        const castLimit = castInfo.slice(0, 10);

        const crewInfo = data.crew
          .filter((person) => person.profile_path !== null)
          .map((person) => ({
            job: person.job,
            name: person.original_name,
            profile: person.profile_path,
          }));
        const crewLimit = crewInfo.slice(0, 10);

        setCastDetail(castLimit);
        setCrewDetail(crewLimit);
      } catch (error) {
        console.error("Error fetching Movie List info:", error);
      }
    };

    if (movieId) {
      fetchCreditDetail();
    }
  }, [movieId]);
  return { castDetail, crewDetail };
};

const useVideoDetail = (movieId) => {
  const [videoDetail, setVideoDetail] = useState("");

  useEffect(() => {
    const fetchVideoDetail = async () => {
      try {
        const url =
          "https://api.themoviedb.org/3/movie/" +
          movieId +
          "/videos?language=en-US";
        // "https://api.themoviedb.org/3/movie/1022789?language=en-US";
        const headers = {
          accept: "application/json",
          Authorization: "Bearer " + API_KEY,
        };
        const response = await fetch(url, {
          method: "GET",
          headers: headers,
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        // console.log(111111111);
        // console.log(data);
        if (data) {
          const officialTeaser = data.results.find(
            (trailer) => trailer.name === "Official Trailer"
          );
          const keyOfOfficialTeaser = officialTeaser
            ? officialTeaser.key
            : null;
          setVideoDetail(keyOfOfficialTeaser);
        } else {
          setVideoDetail(false);
        }
      } catch (error) {
        console.error("Error fetching  Video info:", error);
      }
    };

    if (movieId) {
      fetchVideoDetail();
    }
  }, [movieId]);
  return videoDetail;
};
export { useMovieDetail, useGetCredit, useVideoDetail };
