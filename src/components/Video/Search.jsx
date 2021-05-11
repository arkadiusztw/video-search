import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../Buttons/button";
import { BiSearch } from "react-icons/bi";
import { useDispatch } from "react-redux";
import {
  PushRequest,
  FetchChoiceAPI,
  IsAPIready,
} from "../../actions/DataActions.jsx";
import { GetData } from "../../api/api";
import { SiYoutube, SiVimeo } from "react-icons/si";
import { RiDeleteBack2Line } from "react-icons/ri";
import SwitchSelector from "react-switch-selector";
import SearchHistoryList from "./SearchHistoryList";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [request, setRequest] = useState("");
  const [CurrentAPI, setCurrentAPI] = useState("youtube");
  const [HistoryActive, setHistoryActive] = useState(false);

  const switchValue = [
    {
      label: (
        <LabelChoice>
          <SiYoutube />
        </LabelChoice>
      ),
      value: "youtube",
      selectedBackgroundColor: "#fb3131",
    },
    {
      label: (
        <LabelChoice>
          <SiVimeo />
        </LabelChoice>
      ),
      value: "vimeo",
      selectedBackgroundColor: "#318ffb",
    },
  ];

  const handleRequest = (e) => {
    e.preventDefault();
    setRequest(e.target.value);
  };

  const handleClear = (e) => {
    e.preventDefault();
    setRequest(" ");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(PushRequest(request));
    dispatch(IsAPIready(false));
    dispatch(FetchChoiceAPI(CurrentAPI));
    dispatch(GetData({ request, CurrentAPI }));
  };

  const handleHistory = (e) => {
    e.preventDefault();
    if (request.length === 0) {
      setHistoryActive(!HistoryActive);
    } else setHistoryActive(false);
  };

  return (
    <Wrapper>
      <SearchContainer>
        <SwitchContainer>
          <SwitchSelector
            onChange={(v) => {
              setCurrentAPI(v);
            }}
            options={switchValue}
            initialSelectedIndex={0}
            backgroundColor={"transparent"}
            fontColor={"#f5f6fa"}
          />
        </SwitchContainer>

        <FormContainer>
          <Form>
            <Label>
              <Input
                type="text"
                name="search"
                value={request}
                placeholder="wyszukaj film..."
                onChange={handleRequest}
                onFocus={handleHistory}
                onClick={handleHistory}
              />
              <SubmitButton type="submit" onClick={handleSubmit}>
                <SearchIcon />
              </SubmitButton>
              <ClearButton type="submit" onClick={handleClear}>
                <ClearIcon />
              </ClearButton>
            </Label>
            <SearchHistory visible={HistoryActive}>
              <SearchHistoryList />
            </SearchHistory>
          </Form>
        </FormContainer>
      </SearchContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  background-color: black;
`;
const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const SubmitButton = styled(Button)`
  padding: 10px;
`;
const ClearButton = styled(Button)`
  padding: 10px;
`;
const FormContainer = styled.div`
  min-width: 335px;
  min-height: 100px;
  margin: 0 auto;
  padding: 2vh;
  @media (min-width: 801px) {
    width: 50vw;
    margin: 0 auto;
  }
`;
const Form = styled.form`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Input = styled.input`
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 0px;
  padding: 15px;
  appearance: none;
  outline: none;
  font-size: 1.5rem;
  margin: 0 auto;
  text-align: center;
  color: white;
  background-color: transparent;

  &::placeholder {
    color: #d4d4d4;
  }
`;

const Label = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  font-size: 1rem;
  background: #ffffff26;
  margin-top: 20px;
  width: 100%;
`;

const SearchIcon = styled(BiSearch)`
  color: white;
  font-size: 30px;
`;
const ClearIcon = styled(RiDeleteBack2Line)`
  color: white;
  font-size: 30px;
`;
const SearchHistory = styled.div`
  display: ${(props) => (props.visible ? "flex" : "none")};
  width: 100%;
  height: auto;
  position: relative;
  justify-content: center;
  align-items: end;
  background: #ffffff26;
`;

const SwitchContainer = styled.div`
  min-width: 335px;
  max-width: 435px;
  width: 50%;
  height: 40px;
  margin-top: 20px;
`;

const LabelChoice = styled.span`
  color: white;
`;

export default SearchBar;
