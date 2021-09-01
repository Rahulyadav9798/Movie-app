import React, { useEffect, useState } from "react";
import Axios from "axios";
import { API_KEY } from "../App";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 30px;
  justify-content: center;
  border-bottom: 1px solid lightgray;
`;
const CoverImage = styled.img`
  object-fit: cover;
  height: 350px;
`;
const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;
const MovieName = styled.span`
  font-size: 22px;
  font-weight: 600;
  color: black;
  margin: 15px 0;
  white-space: nowrap;
  overflow: hidden;
  text-transform: capitalize;
  text-overflow: ellipsis;
  & span {
    opacity: 0.8;
  }
`;
const MovieDetail = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: black;
  overflow: hidden;
  margin: 4px 0;
  text-transform: capitalize;
  text-overflow: ellipsis;

  & span {
    opacity: 0.5;
  }
`;
const Close = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: black;
  background: lightgray;
  height: fit-content;
  padding: 8px;
  border-radius: 50%;
  cursor: pointer;
  opacity: 0.8;
`;
const MovieCardInfo = (props) => {
  const [movieDetail, setMovieInfo] = useState();
  const { selectedMovie } = props;

  useEffect(() => {
    Axios.get(
      `https://www.omdbapi.com/?i=${selectedMovie}&apikey=${API_KEY}`,
    ).then((response) => setMovieInfo(response.data));
  }, [selectedMovie]);
  return (
    <Container>
      {movieDetail ? (
        <>
          <CoverImage src={movieDetail?.Poster} alt={movieDetail?.Title} />
          <InfoColumn>
            <MovieName>
              {movieDetail?.Type}: <span>{movieDetail?.Title}</span>
            </MovieName>
            <MovieDetail>
              IMDB Rating: <span>{movieDetail?.imdbRating}</span>
            </MovieDetail>
            <MovieDetail>
              Year: <span>{movieDetail?.Year}</span>
            </MovieDetail>
            <MovieDetail>
              Language: <span>{movieDetail?.Language}</span>
            </MovieDetail>
            <MovieDetail>
              Rated: <span>{movieDetail?.Rated}</span>
            </MovieDetail>
            <MovieDetail>
              Released: <span>{movieDetail?.Released}</span>
            </MovieDetail>
            <MovieDetail>
              Runtime: <span>{movieDetail?.Runtime}</span>
            </MovieDetail>
            <MovieDetail>
              Genre: <span>{movieDetail?.Genre}</span>
            </MovieDetail>
            <MovieDetail>
              Director: <span>{movieDetail?.Director}</span>
            </MovieDetail>
            <MovieDetail>
              Actors: <span>{movieDetail?.Actors}</span>
            </MovieDetail>
            <MovieDetail>
              Plot: <span>{movieDetail?.Plot}</span>
            </MovieDetail>
          </InfoColumn>
          <Close onClick={() => props.onMovieSelect()}>X</Close>
        </>
      ) : (
        "Loading..."
      )}
    </Container>
  );
};
export default MovieCardInfo;
