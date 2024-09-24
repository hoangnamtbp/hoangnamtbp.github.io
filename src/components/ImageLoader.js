import PostGrid from './PostGrid';

const importAllImages = (requireContext) => {
    return requireContext.keys().map(requireContext);
};

const images = importAllImages(require.context('../assets', false, /\.(jpeg|jpg|png)$/));
console.log(images);


const ImageLoader = () => {
    // Create posts array by mapping over the imported images
    const posts = images.map((imageUrl, index) => ({
      imageUrl, 
      caption: `Post ${index + 1}`, // Optional: Customize the caption based on your needs
    }));
  
    return <PostGrid posts={posts} />; // Pass the posts to the PostGrid component
  };
  
  export default ImageLoader;
