import React, { useState, useEffect } from 'react';
import PostGrid from './PostGrid';
import Modal from './Modal';

const importAllImages = (requireContext) => {
    return requireContext.keys().map(requireContext);
};

const images = importAllImages(require.context('../assets', false, /\.(jpeg|jpg|png|JPEG|PNG)$/));
console.log(images);


// const ImageLoader = () => {
//     // Create posts array by mapping over the imported images
//     const posts = images.map((imageUrl, index) => ({
//       imageUrl, 
//       caption: `Post ${index + 1}`, // Optional: Customize the caption based on your needs
//     }));
  
//     return <PostGrid posts={posts} />; // Pass the posts to the PostGrid component
//   };

const ImageLoader = ({setPostCount}) => {
  // State to manage selected post and modal visibility
  const [selectedPost, setSelectedPost] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

    // Pass the number of posts to the parent component
  useEffect(() => {
    if (setPostCount) { // Check if setPostCount is passed as a prop
      setPostCount(images.length);
    }
  }, [setPostCount]);

  // Create an array of post objects with image URLs and captions
  const posts = images.map((imageUrl, index) => ({
    imageUrl, 
    caption: `Post ${index + 1}`, // Optional: Customize the caption based on your needs
  }));

  // Function to open the modal with the selected post
  const openModal = (post) => {
    setSelectedPost(post);
    setModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalOpen(false);
    setSelectedPost(null);
  };

  return (
    <>
      {/* Pass the openModal function to PostGrid to handle image clicks */}
      <PostGrid posts={posts} onImageClick={openModal} />
      
      {/* Render the Modal component when a post is selected */}
      {selectedPost && (
        <Modal
          isOpen={isModalOpen}
          imageUrl={selectedPost.imageUrl}
          caption={selectedPost.caption}
          onClose={closeModal}
        />
      )}
    </>
  );
};
  
export default ImageLoader;
