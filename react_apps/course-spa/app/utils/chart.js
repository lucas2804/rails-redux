import d3 from 'd3';

export const responsivefy = (svg, id) => {
  const container = d3.select(svg.node().parentNode);
  const width = parseInt(svg.style('width'), 10);
  const height = parseInt(svg.style('height'), 10);
  const aspect = width / height;

  const resize = () => {
    const targetWidth = parseInt(container.style('width'), 10);
    svg.attr('width', targetWidth);
    svg.attr('height', Math.round(targetWidth / aspect));
  };

  svg
    .attr('viewBox', `0 0 ${width} ${height}`)
    .attr('preserveAspectRatio', 'xMinYMid')
    .call(resize);

  d3.select(window).on(`resize.${id}`, resize);
};

export const offResize = id => {
  d3.select(window).on(`resize.${id}`, null);
};

export const generateContainer = ({ container, width, height, margin, id, padding }) =>
  d3.select(container)
  .append('svg')
  .style('padding', padding)
  .attr('width', width + margin.left + margin.right)
  .attr('height', height + margin.top + margin.bottom)
  .call(responsivefy, id)
  .append('g')
  .attr('transform', `translate(${margin.left}, ${margin.top})`);
