export default function getNeighborhoodsList() {
    this.sanFranciscoNeighborhoods = ['Soma', 'Union Square'];

    const self = this;
    this.addNeighborhood = (newNeighborhood) => {
        self.sanFranciscoNeighborhoods.push(newNeighborhood);
        return self.sanFranciscoNeighborhoods;
    };
}