
function Settings({ profile, setProfile, toggleEditing }) {
  const handleNameChange = (e) => setProfile({ ...profile, name: e.target.value });
  const handleRoleChange = (e) => setProfile({ ...profile, role: e.target.value });
  const handleAvatarChange = (e) => setProfile({ ...profile, avatar: e.target.value });

  const handleSkillChange = (index, level) => {
    const newSkills = [...profile.skills];
    newSkills[index].level = level;
    setProfile({ ...profile, skills: newSkills });
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-900">Edit Profile</h2>
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          value={profile.name}
          onChange={handleNameChange}
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Role</label>
        <input
          type="text"
          value={profile.role}
          onChange={handleRoleChange}
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Avatar URL</label>
        <input
          type="text"
          value={profile.avatar}
          onChange={handleAvatarChange}
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
        />
      </div>

      <h3 className="mt-4 text-md font-semibold text-gray-900">Skills</h3>
      {profile.skills.map((skill, index) => (
        <div key={index} className="flex items-center space-x-4 mt-2">
          <div className="w-1/2">
            <label className="block text-sm text-gray-700">{skill.name}</label>
            <input
              type="number"
              min="0"
              max="100"
              value={skill.level}
              onChange={(e) => handleSkillChange(index, e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>
      ))}

      <button
        onClick={toggleEditing}
        className="mt-6 px-4 py-2 text-white bg-indigo-600 rounded-md"
      >
        Save Changes
      </button>
    </div>
  );
}

export default Settings;