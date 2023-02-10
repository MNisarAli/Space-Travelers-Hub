const baseURL = 'https://api.spacexdata.com/v3/missions';

const getAllMissions = async () => {
  let payload;
  try {
    const response = await fetch(baseURL);
    const missions = await response.json();

    if (!missions) {
      throw new Error('No data found :(');
    } else {
      payload = missions.map((mission) => (
        {
          id: mission.mission_id,
          name: mission.mission_name,
          description: mission.description,
        }
      ));
    }
  } catch (error) {
    return error;
  }
  return payload;
};

const missionsService = {
  getAllMissions,
};

export default missionsService;
