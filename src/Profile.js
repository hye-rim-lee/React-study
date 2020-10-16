import React from 'react';

const profileData = {
    hello1: {
    name: '이혜림',
    description:
      '이곳에 나의 프로필을 소개해봅시다'
  },
  hello2: {
    name: '사용자',
    description: '이곳에 사용자를 소개해봅시다'
  }
};

const Profile = ({ match }) => {

  const { username } = match.params;
  const profile = profileData[username];
  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;