import { useState } from 'react';
import axios from 'axios';

function AvatarUpload({ onUpload }) {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('image', image);

    const response = await axios.post('/api/create-avatar', formData);

    if (response.data.avatar_id) {
      onUpload(response.data.avatar_id);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="text-center">
      <input type="file" onChange={handleImageChange} className="mb-4" />
      <button type="submit" className="bg-purple-500 text-white px-4 py-2 rounded-lg">
        Upload Avatar
      </button>
    </form>
  );
}

export default AvatarUpload;