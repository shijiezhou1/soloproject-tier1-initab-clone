import { reactive, readonly } from "vue";
import axios from "axios";
import mockData from "@/data/issue";
import mockHistory from "@/data/history";

const state = reactive({
    count: 0,
    reddit: {},
    github: [],
    javascript: [],
});

const setReddit = () => {
    const url = 'https://www.reddit.com/r/Javascript.json?sort=popular';
    axios.get(url).then(res => {
        state.reddit = res.data.data;
    })
}

const setGithub = () => {
    // const url = 'https://api.github.com/search/repositories?q=fork:false+stars:%3E%3D20+created:%3E2021-11-20+topic:JavaScript&sort=stars&order=desc';
    // axios.get(url).then(res => {
    //     state.github = res.data.items;
    // })
    state.github = mockData;
}

const setJavascript = () => {
    state.javascript = mockHistory;
}

export default { state: readonly(state), setReddit, setGithub, setJavascript };