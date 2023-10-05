/* eslint-disable @next/next/no-img-element */
import { SocialMediaType } from '@/utils/enums/socialMediaTypes';
import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaShareAlt,
  FaThumbsUp,
  FaComment,
} from 'react-icons/fa';

interface SocialMediaCardProps {
  socialMediaType: SocialMediaType;
  title: string;
  postImage: string;
  postDescription: string;
  likeCount: number;
  commentCount: number;
}

const SocialMediaCard: React.FC<SocialMediaCardProps> = ({
  socialMediaType,
  title,
  postImage,
  postDescription,
  likeCount,
  commentCount,
}) => {
  return (
    <div className="bg-green rounded-md p-8 shadow-sm w-['15em']">
      <div className="flex items-center mb-2">
        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
          {/* Render social media icon based on the socialMediaType prop */}
          {socialMediaType === SocialMediaType.FaceBook? (
            <FaFacebook className="w-6 h-6 text-blue-500" />
          ) : (
            <FaInstagram className="w-6 h-6 text-pink-500" />
          )}
        </div>
        <div className="ml-2 text-lg font-semibold">{title}</div>
      </div>
      <div className="mb-4">
      <img
          src={postImage}
          alt="Post"
          className="w-full h-64 rounded-lg" 
        />
      </div>
      <p className="text-gray-700">{postDescription}</p>
      <div className="flex justify-between mt-4">
        <div className="flex items-center space-x-2">
          {/* Render like icon and likeCount */}
          <div className="flex items-center">
            <FaThumbsUp className="w-6 h-6 text-blue-600" />
            <span className="ml-1">{likeCount}</span>
          </div>
          {/* Render comment icon and commentCount */}
          <div className="flex items-center">
            <FaComment className="w-6 h-6 text-green-600" />
            <span className="ml-1">{commentCount}</span>
          </div>
        </div>
        {/* Render share icon */}
        <FaShareAlt className="w-6 h-6 text-gray-600" />
      </div>
    </div>
  );
};

export default SocialMediaCard;
