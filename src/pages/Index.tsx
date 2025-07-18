const Index = () => {
  console.log("Index component is rendering");
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-foreground">Welcome to Your Blank App</h1>
        <p className="text-xl text-muted-foreground">Start building your amazing project here!</p>
        <div className="mt-4 text-sm text-muted-foreground">
          Preview is working! 🎉
        </div>
      </div>
    </div>
  );
};

export default Index;
