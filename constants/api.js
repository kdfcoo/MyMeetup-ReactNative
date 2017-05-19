import axiso from 'axios';

// export const fetchMeetups = () =>
//     fetch('http://192.168.2.217:3000/api/meetups')
//         .then(res => res.json());

axiso.defaults.baseURL = 'http://192.168.2.217:3000/api';

const fakeGroupId = '591e5aa961be1d1840ce8498';

class MeetupApi {
  constructor() {
    this.groupId = fakeGroupId;
    this.path = `/groups/${this.groupId}/meetups`;
  }

  async fetchGroupMeetups() {
    const { data } = await axiso.get(this.path);

    // console.log(data.meetups);
    return data.meetups;
  }
}

export {
  MeetupApi,
};
