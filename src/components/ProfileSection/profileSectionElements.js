import styled from 'styled-components';

export const Title = styled.h3`
  color: #629aef;
  font-size: 18px;
  font-weight: 400;
`;

export const CardSection = styled.div`
  display: flex;
  margin: 20px 30px;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 30px;
`;

export const BioContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BioWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Name = styled.h1`
  font-size: 24px;
  font-weight: 600;
`;

export const BioText = styled.p`
  font-size: 16px;
  display: flex;
  flex-grow: 1;
  margin: 10px 0;
  width: 100%;
`;

export const SocialWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  width: 100%;
  justify-content: flex-end;
`;

export const Image = styled.img`
  border-radius: 50px;
  width: 100px;
  height: 100px;
`;

export const SocialMedia = styled.a`
  font-size: 32px;
  text-decoration: none;
  text-align: center;
  margin: 0 10px;
`;

export const SocialMediaTitle = styled.h4`
  font-size: 16px;
  font-weight: 600;
  &:hover {
    color: #216FED;
  }
`;