export default function getNeighborhoodsList() {
    this.sanFranciscoNeighborhoods = ['Soma', 'Union Square'];

    this.addNeighborhood = (newNeighborhood) {
        self.sanFranciscoNeighborhoods.push(newNeighborhood);
        return this.sanFranciscoNeighborhoods;
    };
}