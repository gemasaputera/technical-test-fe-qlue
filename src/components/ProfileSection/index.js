import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import {
  CardSection,
  Title,
  ImageContainer,
  BioContainer,
  Name,
  Image,
  BioText,
  SocialWrapper,
  BioWrapper,
  SocialMedia,
  SocialMediaTitle,
} from './profileSectionElements';
import { profileData } from 'utils/data';
const { name, job, bio, images, social_media } = profileData;

function ProfileSection() {
  return (
    <CardSection>
      <ImageContainer>
        <Image src={images} alt={`photo profile of ${name}`} />
      </ImageContainer>
      <BioContainer>
        <Name>{name}</Name>
        <Title>{job}</Title>
        <BioWrapper>
          <BioText>
            {bio}
          </BioText>
          <SocialWrapper>
            {
              social_media.map((item,index)=>{
                const logo = item.title === 'LinkedIn'?<FaLinkedin />:item.title === 'Github'?
                <FaGithub />: <FaInstagram />;
                return(
                  <SocialMedia target="_blank" href={item.url} key={`social-${index}`}>
                    {logo}
                    <SocialMediaTitle>{item.title}</SocialMediaTitle>
                  </SocialMedia>
                )
              })
            }
          </SocialWrapper>
        </BioWrapper>
      </BioContainer>
    </CardSection>
  )
}

export default ProfileSection;
