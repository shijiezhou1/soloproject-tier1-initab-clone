import { reactive, readonly } from "vue";
import axios from "axios";

const state = reactive({
    count: 0,
    reddit: {},
    github: {}
});

const increment = function () {
    state.count++;
}

const setReddit = () => {
    console.log('called')
    const url = 'https://www.reddit.com/r/Javascript.json?sort=popular';
    axios.get(url).then(res => {
        state.reddit = res.data.data;
    })
}

const setGithub = () => {
    const url = 'https://api.github.com/search/repositories?q=fork:false+stars:%3E%3D20+created:%3E2021-11-20+topic:JavaScript&sort=stars&order=desc';
    axios.get(url).then(res => {
        state.github = res.data;
    })
}

export default { state: readonly(state), increment, setReddit, setGithub };