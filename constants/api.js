export const fetchMeetups = () =>
    fetch('http://192.168.2.217:3000/api/meetups')
        .then(res => res.json());
