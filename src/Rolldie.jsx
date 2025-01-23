export default function Rolldie({ numsides = 6 }) {
    const roll = Math.floor(Math.random() * numsides) + 1;
    return <p>--{numsides} sided Die roll:{roll}</p>
}