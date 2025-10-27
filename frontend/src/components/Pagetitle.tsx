interface PagetitleProps {
  title: string;
  subtitle: string;
}
const Pagetitle: React.FC<PagetitleProps> = ({ title, subtitle }) => {
  return (
    <>
      <div className="ml-1">
        <h1 className="text-2xl font-bold text-primary">{title}</h1>
        <p className="text-gray-700">{subtitle}</p>
      </div>
    </>
  );
};

export default Pagetitle;
