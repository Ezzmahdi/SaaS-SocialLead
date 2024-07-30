export default async (req, res) => {
    try {
      // Mock data for demonstration purposes
      const avatars = [
        { name: 'Avatar 1', photoUrl: 'https://placehold.co/100x100' },
        { name: 'Avatar 2', photoUrl: 'https://placehold.co/100x100' }
      ]; 
  
      res.status(200).json(avatars);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch avatars', error: error.message });
    }
  };
  