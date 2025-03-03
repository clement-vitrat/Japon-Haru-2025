// Fictional database for Japan travel blog with localStorage persistence

// Load blog posts from localStorage or use defaults
const getInitialBlogPosts = () => {
    const savedPosts = localStorage.getItem('article');
    if (savedPosts) {
      return JSON.parse(savedPosts);
    }
    return [
      {
        id: 1,
        title: "First Day in Tokyo",
        date: "2025-03-15",
        localisation: "Tokyo",
        content: "Today marks the beginning of my adventure in Japan. After a long flight, I finally arrived in Tokyo. The city is a fascinating blend of traditional culture and futuristic technology. I visited Shibuya Crossing, one of the busiest intersections in the world, and was amazed by the sea of people moving in perfect harmony.",
        image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        tags: ["Tokyo", "First Impressions", "Travel"]
      },
      {
        id: 2,
        title: "Exploring Kyoto's Temples",
        date: "2025-03-18",
        localisation: "Kyoto",
        content: "Kyoto, the cultural heart of Japan, is home to over 1,600 Buddhist temples and 400 Shinto shrines. Today, I visited Kinkaku-ji (the Golden Pavilion) and was stunned by its reflection in the surrounding pond. The tranquility of the gardens provided a perfect escape from the hustle and bustle of city life.",
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        tags: ["Kyoto", "Temples", "Culture"]
      },
      {
        id: 3,
        title: "Mount Fuji: A Majestic View",
        date: "2025-03-22",
        localisation: "Hakone",
        content: "Today I had the privilege of seeing Mount Fuji in all its glory. The iconic snow-capped peak is even more impressive in person than in photographs. I took a day trip from Tokyo to Hakone, where I enjoyed the hot springs and the breathtaking views of Japan's highest mountain.",
        image: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        tags: ["Mount Fuji", "Nature", "Hakone"]
      },
      {
        id: 4,
        title: "Mount Fuji: A Majestic View",
        date: "2025-03-22",
        localisation: "Hakone",
        content: "Today I had the privilege of seeing Mount Fuji in all its glory. The iconic snow-capped peak is even more impressive in person than in photographs. I took a day trip from Tokyo to Hakone, where I enjoyed the hot springs and the breathtaking views of Japan's highest mountain.Today I had the privilege of seeing Mount Fuji in all its glory. The iconic snow-capped peak is even more impressive in person than in photographs. I took a day trip from Tokyo to Hakone, where I enjoyed the hot springs and the breathtaking views of Japan's highest mountain.",
        image: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        tags: ["Mount Fuji", "Nature", "Hakone"]
      }
    ];
  };
  
  // Load gallery images from localStorage or use defaults
  const getInitialGalleryImages = () => {
    const savedImages = localStorage.getItem('photos');
    if (savedImages) {
      return JSON.parse(savedImages);
    }
    return [
      {
        id: 1,
        title: "Tokyo Skyline",
        date: "2025-03-15",
        description: "View of Tokyo skyline with Tokyo Tower",
        url: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        category: "Cityscape"
      },
      {
        id: 2,
        title: "Cherry Blossoms",
        date: "2025-05-15",
        description: "Cherry blossoms in full bloom at Ueno Park",
        url: "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        category: "Nature"
      },
      {
        id: 3,
        title: "Traditional Tea Ceremony",
        date: "2025-04-15",
        description: "Experiencing a traditional Japanese tea ceremony",
        url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        category: "Culture"
      },
      {
        id: 4,
        title: "Fushimi Inari Shrine",
        date: "2025-09-15",
        description: "The famous torii gates at Fushimi Inari Shrine in Kyoto",
        url: "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        category: "Landmarks"
      }
    ];
  };
  
  
  // Initialize data from localStorage or defaults
  export const article = getInitialBlogPosts();
  export const photos = getInitialGalleryImages();
  
  // Admin credentials
  export const adminCredentials = {
    username: "admin",
    password: "japan2025"
  };
  
  // Function to add a new blog post
  export const addBlogPost = (post) => {
    const newPost = {
      ...post,
      id: article.length > 0 ? Math.max(...article.map(p => p.id)) + 1 : 1,
      date: new Date().toISOString().split('T')[0]
    };
    article.unshift(newPost);
    
    // Save to localStorage
    localStorage.setItem('article', JSON.stringify(article));
    
    return newPost;
  };
  

  // Fonction pour ajouter une nouvelle photo
  export const addGalleryImage = (image) => {
    const newImage = {
      ...image,
      id: photos.length > 0 ? Math.max(...photos.map(img => img.id)) + 1 : 1
    };
    photos.push(newImage);

    // Sauvegarde dans localStorage
    localStorage.setItem('photos', JSON.stringify(photos));

    return newImage;
  };


